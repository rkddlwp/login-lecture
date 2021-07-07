"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("login/index");
};

module.exports = {
  home,
  login
};