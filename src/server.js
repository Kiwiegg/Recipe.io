const express = require("express");
const app = express();

const PORT = 8888;

var router = require("../Router/Router.js");

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("govind is gay");
})



app.listen(PORT, () => console.log("App is listening on port :" + PORT));