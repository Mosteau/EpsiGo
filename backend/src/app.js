// Load the express module to create a web application

const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://mysite.com",
      "http://another-domain.com",
    ],
  })
);

app.use(express.static("./public"));
app.use("/images", express.static(path.join(__dirname, "images")));

const router = require("./router");

app.use("/images", express.static("images"));

app.use("/api", router);

app.use(express.static("./public/"));

const errorManager = require("./services/errorManager");

app.use(errorManager);
module.exports = app;
