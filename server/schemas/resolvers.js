require('dotenv').config()
const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const fetch = require("node-fetch");

console.log(process.env)
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
    getSummary: (_, data) => {
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
          process.env.apikey,
          "X-RapidAPI-Host": "textanalysis-text-summarization.p.rapidapi.com",
        },
        body: encodedParams,
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.error("error:" + err));
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
  },
};

module.exports = resolvers;
