const express = require("express");
const helmet = require("helmet");
const server = express();
const cors = require("cors");
const PollRouter = require("../Routes/poll-router.js");

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/api/poll", PollRouter);

server.get("/", (req, res) => {
  res.send("<h1>&emsp;&emsp;&emsp;&emsp;API IS UP  🤖 <h1>");
});

module.exports = server;
