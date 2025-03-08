const express = require("express");
const app = express();
const port = 3001;

// menggunakan http.createServer
const http = require("http");
const server = http.createServer(app);

app.use(express.json());

const router = require("./src/routes");
app.use("/api", router);

server.listen(process.env.PORT || port, () =>
  console.log(`server running at http://localhost:${port}`)
);
