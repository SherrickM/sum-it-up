const { Schema, model } = require("mongoose");

const sumSchema = new Schema(
  {
    summaryText: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    createDate: {
      type: Date,
      default: Date.now,
      // get: timestamp =>
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    summaryName:{
      type: String,
      required: false,
    }
  }
);

const Summary = model('Summary', sumSchema)

module.exports = Summary;
