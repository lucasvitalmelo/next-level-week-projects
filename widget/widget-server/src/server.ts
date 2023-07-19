import express = require("express");

const app = express();

const port = 3333;
app.listen(port, () => {
  console.log(`-----------------------------------`);
  console.log(`"HTTP server running! Port: ${port} "`);
  console.log(`-----------------------------------`);
});
