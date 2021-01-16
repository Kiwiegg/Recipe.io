const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8888;

var recipeRouter = require("./routes/recipe.js");

app.use("/recipe", recipeRouter);
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => console.log("App is listening on port :" + PORT));

module.exports = app;
