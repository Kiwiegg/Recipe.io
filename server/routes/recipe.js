const express = require("express");
const router = express.Router();

const APIkey = "406da80205444f97be21d8a5182a7846";

router.get("/", (req, res) => {
    res.send("govind is gay");
});

router.get("/getRecipe", (req, res) => {

});

module.exports = router;
