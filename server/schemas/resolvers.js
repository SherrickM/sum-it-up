const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const fetch = require("node-fetch")

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me:  async (parent, args, context) => {
      if(context.user){
        const userData = await User.findOne({_id: context.user._id}).select('-__v -password');

        return userData;
      }
      throw new AuthenticationError('Not logged in!')
    },
    getSummary:(text, sentnum) => {
      const url = 'https://textanalysis-text-summarization.p.rapidapi.com/text-summarizer';

      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '182714b1e6mshb412212f9fdf6e5p13fb70jsn4cac94f5b2c6',
          'X-RapidAPI-Host': 'textanalysis-text-summarization.p.rapidapi.com'
        },
        body: `{"text":`+{text}+`,"sentnum":`+{sentnum}+`}`
        };

        fetch(url, options)
          .then(res => res.json())
          .then(json => console.log(json))
          .catch(err => console.error('error:' + err));
    }
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
        throw new AuthenticationError('Incorrect Username');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Password');
      }

      const token = signToken(user);
      return { token, user };
    }
  },
  
};

module.exports = resolvers;