var app_1 = require("harvey-language");
var express = require("express");

let app = express();

app_1.default({
  injectJS: true,
  SSR: true,
  server: app,
  port: 3001,
});
