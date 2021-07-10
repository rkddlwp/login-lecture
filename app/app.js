"use strict"; //ES 문법을 준수한다는 관례

//모듈
const express = require("express"); //express module을 찾아옴
const bodyParser = require("body-parser");
const dotenv = require("dotenv");   // dotenv는 환경변수 설정을 관리해줌, 개발자마다 개발하는 os가 다르기에 사용

const app = express();
dotenv.config();


//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
//URL을 통해 전달되는 데이터에 한글, 공백 같은 문자가 포함될 경우에 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended : true }));

app.use("/", home); //use = 미들웨어를 등록해주는 메서드

module.exports = app;