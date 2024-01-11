const functions = require("firebase-functions");
const dotenv = require('dotenv').config()


exports.direct = require('./chat.function');