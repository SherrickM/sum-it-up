const mongoose = require('mongoose');

var server =  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sumitupapp';
mongoose.connect(
server
 ,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = mongoose.connection;

