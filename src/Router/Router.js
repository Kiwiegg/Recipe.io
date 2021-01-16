const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("govind is gay");
});



module.exports = router;