const express = require("express");
const app = express();
const foodModel = require("../models/Food");

app.use(express.json());

/* データの取得 */
app.get("/foods", async(req, res) => {
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* データの作成 */
app.post("/foods", async (req, res) => {
  const food = new foodModel(req.body);

  try {
    await food.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* データの更新 */
app.patch("/foods/:id", async (req, res) => {
  try {
    await foodModel.findByIdAndUpdate(req.params.id, req.body);
    await foodModel.save();
  } catch (err) {
    res.status(500).send(err);
  }
});

/* データの削除 */
app.delete("/foods/:id", async (req, res) => {
  try {
    await foodModel.findByIdAndDelete(req.params.id);
    await foodModel.save();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;