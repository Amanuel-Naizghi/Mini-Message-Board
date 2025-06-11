const express = require("express");
const indexRouter = express.Router();
const {getIndex} = require("../controller/indexController");

indexRouter.get("/",getIndex);

module.exports = indexRouter;