/**
 * Dependencies Imports
 */
const express = require("express");
const dotenv = require("dotenv");
const chalk = require("chalk");
const path = require("path");
const favicon = require("serve-favicon");

/**
 * Initialization
 */
const app = express();
dotenv.config();
const log = console.log;
const appPort = process.env.EXPRIS_PORT || 3125; // Expriss Port

/**
 * Init Middlewares
 */
app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", function (req, res, next) {
  res.status(200).json({
    success: {
      status: 200,
      message: `Welcome to Expris 🐇`,
      data: {},
    },
  });
});

/**
 * Server Start
 */
app.listen(appPort, () => {
  log(
    chalk.cyan("🐇 EXPRIS") +
      chalk.blue(" app running on") +
      chalk.yellow(` http://localhost:${appPort}`)
  );
});
