const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;

var router = require("./routes/recipe.js");

app.use("/api", router);
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => console.log("App is listening on port :" + PORT));

module.exports = app;
