const express = require("express");
const { getStock, getHerd } = require("../controllers/yakcontroller");

const router = express.Router();

// get route for stock in days
router.get("/stock/:days", getStock);

// get route for herd remaining after number of days
router.get("/herd/:days", getHerd);

module.exports = router;
