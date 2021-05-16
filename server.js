const express = require("express");
const app = express();
const port = process.env.port || 3000;
const hololiveRouter = require("./Route/hololive");

app.use(express.json());

app.use(express.static('json')) 

app.use("/hololive", hololiveRouter);

app.get("/", (req, res) => {
  res.send("beer");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
