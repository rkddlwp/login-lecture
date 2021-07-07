"use strict";//ES 문법을 준수한다는 관례

const express = require("express");
const router = express.Router();

const ctrl =require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);

module.exports = router;