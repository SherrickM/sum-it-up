const { Schema, model } = require("mongoose");

const sumSchema = new Schema(
  {
    summary: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  }
  //   {
  //     toJSON: {
  //       virtuals: true
  //     }
  //   }
);

const Summary = model("Summary", userSchema);

module.exports = Summary;
