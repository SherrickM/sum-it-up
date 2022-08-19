var z = require('dotenv').config()
const { AuthenticationError } = require("apollo-server-express");
const { User, Folder } = require("../models");
const fetch = require("node-fetch");
const { signToken } = require("../utils/auth");
const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");


var getClient = function()
{
  const key = z.parsed.apikey;
  const endpoint = z.parsed.endpoint;
  // Authenticate the client with your key and endpoint
  const textAnalyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(key));
  return textAnalyticsClient;
}

async function getAzSummary(text, sentnum)
{
  var client = getClient();
  const documents = [text]
  // const documents = [`The extractive summarization feature uses natural language processing techniques to locate key sentences in an unstructured text document. 
  // These sentences collectively convey the main idea of the document. This feature is provided as an API for developers. 
  // They can use it to build intelligent solutions based on the relevant information extracted to support various use cases. 
  // In the public preview, extractive summarization supports several languages. It is based on pretrained multilingual transformer models, part of our quest for holistic representations. 
  // It draws its strength from transfer learning across monolingual and harness the shared nature of languages to produce models of improved quality and efficiency.`];


  const actions = {
    extractSummaryActions: [{ modelVersion: "latest", orderBy: "Rank", maxSentenceCount: sentnum }],
  };
  const poller = await client.beginAnalyzeActions(documents, actions, "en");

  const resultPages = await poller.pollUntilDone();
  var r = [];

  for await (const page of resultPages) {
    const extractSummaryAction = page.extractSummaryResults[0];
    if (!extractSummaryAction.error) {
        for (const doc of extractSummaryAction.results) {
            console.log(`- Document ${doc.id}`);
            if (!doc.error) {
                console.log("\tSummary:");
                for (const sentence of doc.sentences) {
                    r.push(sentence.text);
                }
            } else {
                console.error("\tError:", doc.error);
            }
        }
    }
  } 

  return r.join(" ");
}

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }
      throw new AuthenticationError("Not logged in!");
    },
    getSummary: async (_, data) => {
      let {text, sentnum} = data;
      var r = await getAzSummary(text, sentnum);
      return {sentences:r};
    },
  },
  Mutation: {
    addUser: async (_parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Username");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Password");
      }

      const token = signToken(user);
      return { token, user };
    },
    // not done
    // createFolder: async (_parent, {name}) => {
    //   const user = await Folder.create({name});

    //   const token = signToken(user);
    //   return {
    //     token: token,
    //     user: user
    //   };
  },
};

module.exports = resolvers;
