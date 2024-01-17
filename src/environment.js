const path = require("path");
console.log("environment.js >>> process.env.NODE_ENV :", process.env.NODE_ENV) // TODO remove later
const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "../.env." + ENV);

require("dotenv").config({ path: PATH });

module.exports = ENV;
