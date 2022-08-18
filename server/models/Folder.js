const { Schema, model } = require("mongoose");
const sumSchema = require("./Summary");

const folderSchema = new Schema(
  {
    name:{
      type: String, 
      required: true,
      unique: true
    },
    summaries: [sumSchema],
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
    id: false,
  }
);

const Folder = model("Folder", folderSchema);

module.exports = Folder;
