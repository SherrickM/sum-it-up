// const { Summary } = require("../models");
// const {Query} = require("../schemas/resolvers");

// module.exports = {
//   async getSummary({ body }, res) {
//     if (!body) {
//       return res.status(400).json({ message: "No parameters." });
//     }

//     var summaryOfReq = await Query.getSummary(null, body);
//     res.status(200).json(summaryOfReq);
//   },
// };
