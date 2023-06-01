const path = require('path')
const rootDir = require("../util/path")

exports.getContactUs = (req, res) => {
    res.sendFile(path.join(rootDir, "views", "contactUs.html"))
}

exports.postContactUs = (req, res) => {
    res.sendFile(path.join(rootDir, "views", "success.html"))
}