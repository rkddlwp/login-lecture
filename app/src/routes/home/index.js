"use strict";//ES 문법을 준수한다는 관례

const express = require("express");
const router = express.Router();

const ctrl =require("./home.ctrl");

//각 url에서 get 또는 post를 요청시 두번째 알규먼츠 실행
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login); 
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;