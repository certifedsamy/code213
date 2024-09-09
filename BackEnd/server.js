const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const creatorRouter = require("./routes/creator.route");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB is running"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.use("/creator", creatorRouter);

app.get("/getData", (req, res) => {
  res.send("data is working");
});

app.listen(port, () => {
  console.log("the server is running on https://localhost" + port);
});
