// npm module that loads enviroment variables from a .env file
require('dotenv').config()

const myconfig = {
    "host": "",
    "database": "",
    "username": "",
    "password": "",
    "port": "",
    // "use_env_variable": true,
    "dialect":"",
};


module.exports = myconfig
