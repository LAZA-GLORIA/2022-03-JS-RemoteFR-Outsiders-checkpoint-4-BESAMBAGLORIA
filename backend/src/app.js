const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(router);

// simple route
app.get("/", (req, res) => {
  res.send({ message: "CHECKPOINT4 le server fonctionne" });
});

// ready to export
module.exports = app;
