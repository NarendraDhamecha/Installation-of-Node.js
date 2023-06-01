const express = require('express')
const path = require('path')
const router = express.Router();
const rootDir = require("../util/path");

router.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "contactUs.html"))
})

router.post("/", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "success.html"))
})

module.exports = router;