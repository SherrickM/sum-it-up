// // use express for routing
// const router = require("express").Router();

// // const axios = require("axios");
// // initiates database modesl into variable models
// var db = require("../models");
// // sets port based on the deployment enviroment as determeind by const env
// // const PORT = process.env.PORT || 3001;

// // router.get("/url/:url", async (req, res) => {
// //   getSummaryViaUrl(req.params.url);
// // });

// // router.get("/test/:text", async (req, res) => {
// //   getSummaryViaTest(req.params.text)
// // });

// const getSummaryViaUrl = (e) => {
//   console.log(e);
//   const encodedParams = new URLSearchParams();
//   encodedParams.append("url", e);
//   encodedParams.append("sentnum", "3");

//   const options = {
//     method: "POST",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "X-RapidAPI-Key": "47a5a67642msh009c5b0acb21432p1fd494jsn96c3b9ceacca",
//       "X-RapidAPI-Host": "textanalysis-text-summarization.p.rapidapi.com",
//     },
//     data: encodedParams,
//   };

//   fetch(
//     "https://textanalysis-text-summarization.p.rapidapi.com/text-summarizer-url",
//     {
//       method: "POST",
//       headers: {
//         "content-type": "application/x-www-form-urlencoded",
//         "X-RapidAPI-Key": "47a5a67642msh009c5b0acb21432p1fd494jsn96c3b9ceacca",
//         "X-RapidAPI-Host": "textanalysis-text-summarization.p.rapidapi.com",
//       },
//       data: encodedParams,
//     }
//   )
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });

//   // axios
//   //   .request(options)
//   //   .then(function (response) {
//   //     console.log(response.data);
//   //   })
//   //   .catch(function (error) {
//   //     console.error(error);
//   //   });
// };

// const getSummaryViaTest = (e) => {
//   const encodedParams = new URLSearchParams();
//   encodedParams.append("text", e);
//   encodedParams.append("sentnum", "3");

//   const options = {
//     method: "POST",
//     url: "https://textanalysis-text-summarization.p.rapidapi.com/text-summarizer-text",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "X-RapidAPI-Key": "47a5a67642msh009c5b0acb21432p1fd494jsn96c3b9ceacca",
//       "X-RapidAPI-Host": "textanalysis-text-summarization.p.rapidapi.com",
//     },
//     data: encodedParams,
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };

// module.exports = router;
