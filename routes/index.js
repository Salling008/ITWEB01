const express = require("express");
const { check, validationResult } = require("express-validator");
var mid = require("../middleware");


const router = express.Router();

// GET /
router.get("/", function (req, res, next) {
  return res.render("index");
});

module.exports = router;
