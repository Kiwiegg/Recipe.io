const express = require("express");
const app = express();
const cors = require("cors")l

const PORT = 8888;

var router = require("./routes/recipe.js");

app.use("/api", router);
app.use(cors());

app.get("/", (req, res) => {
    res.send("govind is gay");
})

app.listen(PORT, () => console.log("App is listening on port :" + PORT));
