require('dotenv').config()
const { AuthenticationError } = require("apollo-server-express");
const { User, Folder } = require("../models");
const fetch = require("node-fetch");
const { signToken } = require("../utils/auth");

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
      const encodedParams = new URLSearchParams();
      encodedParams.append(
        "text",
        text
      );
      encodedParams.append("sentnum", sentnum);

      const url =
        "https://textanalysis-text-summarization.p.rapidapi.com/text-summarizer-text";

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
          "47a5a67642msh009c5b0acb21432p1fd494jsn96c3b9ceacca",
          "X-RapidAPI-Host": "textanalysis-text-summarization.p.rapidapi.com",
        },
        body: encodedParams,
      };

      var sumval = await fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          return json})
        .catch((err) => console.error("error:" + err));
        console.log(typeof(sumval));
        var rs=  sumval.sentences.join(' ');
        return {sentences:rs};
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
