'use strict';
require('dotenv').config()

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const config = require(path.join(__dirname, '../configs/config.js'));
const db = {};



module.exports = db;
