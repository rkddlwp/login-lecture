"use strict"; //ES 문법을 준수한다는 관례

//모듈
const express = require("express"); //express module을 찾아옴
const app = express();

//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use = 미들웨어를 등록해주는 메서드

module.exports = app;