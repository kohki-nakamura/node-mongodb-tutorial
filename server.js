const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRouters");
app.use(foodRouter)

/* データベース接続 */
require('dotenv').config();
const password = process.env.MONGO_DB_PASSWORD
mongoose.connect(
  `mongodb+srv://mongo:${password}@cluster0.xzqeh8f.mongodb.net/?retryWrites=true&w=majority`
).then(
  () => console.log("データベース接続に成功しました")
).catch(
  (err) => console.log(err)
);

app.listen(3000, () => {
  console.log("サーバーが起動しました");
});