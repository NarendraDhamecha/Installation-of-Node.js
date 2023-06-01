const express = require('express')

const router = express.Router();

const contactUsController = require("../controllers/contact_us");

router.get("/", contactUsController.getContactUs)

router.post("/", contactUsController.postContactUs)

module.exports = router;