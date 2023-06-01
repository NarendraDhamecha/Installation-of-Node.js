const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/add-product", adminController.getProducts);

router.post("/add-product", adminController.postProducts);

module.exports = router;
