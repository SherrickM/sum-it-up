// use express for routing
const router = require('express').Router();

const axios = require("axios");
// initiates database modesl into variable models
var db = require('../models');
// sets port based on the deployment enviroment as determeind by const env
const PORT = process.env.PORT || 3001;

const secrets = require("../secrets")


router.get('/url/:url', async (req, res) => {
    


// // api call for user inputted text
// const encodedParams = new URLSearchParams();
// encodedParams.append("text", "Automatic summarization is the process of reducing a text document with a computer program in order to create a summary that retains the most important points of the original document. As the problem of information overload has grown, and as the quantity of data has increased, so has interest in automatic summarization. Technologies that can make a coherent summary take into account variables such as length, writing style and syntax. An example of the use of summarization technology is search engines such as Google. Document summarization is another.");
// encodedParams.append("sentnum", "5");

// const options = {
//   method: 'POST',
//   url: 'https://textanalysis-text-summarization.p.rapidapi.com/text-summarizer-text',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'X-RapidAPI-Key': '',
//     'X-RapidAPI-Host': 'textanalysis-text-summarization.p.rapidapi.com'
//   },
//   data: encodedParams
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

const getSummaryApi = (e) => {
  console.log(e);
  const encodedParams = new URLSearchParams();
  encodedParams.append(
    "url",
    e
  );
  encodedParams.append("sentnum", "5");

  const options = {
    method: "POST",
    url: "https://textanalysis-text-summarization.p.rapidapi.com/text-summarizer-url",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": secrets.REACT_APP_apikey,
      "X-RapidAPI-Host": "textanalysis-text-summarization.p.rapidapi.com",
    },
    data: encodedParams,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
getSummaryApi(req.params.url)

});


  
module.exports = router;