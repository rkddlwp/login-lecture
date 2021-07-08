"use strict";//ES 문법을 준수한다는 관례

const express = require("express");
const router = express.Router();

const ctrl =require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;