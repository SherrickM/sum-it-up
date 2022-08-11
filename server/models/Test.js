const { Schema, model } = require("mongoose");
const sumSchema = require('./Summary')

const testSchema = new Schema({
  drawer: [sumSchema]
})

const Test = model('Test', testSchema)

module.exports = Test