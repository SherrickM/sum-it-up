const { Schema, model } = require("mongoose");

const sumSchema = new Schema(
  {
    summary: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// const Summary = model("Summary", sumSchema);

module.exports = sumSchema;
