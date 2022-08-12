const { Schema, model } = require("mongoose");

const sumSchema = new Schema(
  {
    summary: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: timestamp =>
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false
  }
);



module.exports = sumSchema;
