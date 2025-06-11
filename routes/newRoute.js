const express = require("express");
const newPageRouter = express.Router();
const {getNewRoute} = require("../controller/newController");

newPageRouter.get("/",getNewRoute);

module.exports = newPageRouter;