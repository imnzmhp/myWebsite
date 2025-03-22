const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// ビューエンジンの設定
app.set("view engine", "ejs");
app.set("views", "./views");

// ミドルウェアの設定
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルートの設定
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// サーバーの起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
