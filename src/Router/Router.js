const express = require("express");
const rounter = express.Router();

router.get("/", function (req, res)) {
    res.send("govind is gay");
}

module.exports = router;