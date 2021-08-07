const express = require("express");
const app = express();
const Phone = require("../controllers/Phone")
app.get("/randomdata",Phone.GetRandomData);
module.exports = app;