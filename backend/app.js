const express = require("express");
const app = express();
const PORT = 9000;
const randomroute = require("./route/Phone");
const cors = require("cors");
app.use(cors());
app.use("/phone", randomroute);
app.listen(PORT, () => console.log("Server listen"));
