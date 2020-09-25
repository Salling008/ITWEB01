const express = require("express");
const { check, validationResult } = require("express-validator");
var mid = require("../middleware");
var User = require("../models/user");
var loginController = require("../controller/loginController");
var workoutController = require("../controller/workoutController");
const router = express.Router();

// GET /workout
router.get("/workout", function (req, res, next) {
  workoutController.workoutGet(req, res, next);
});

// GET /logout
router.get("/logout", function (req, res, next) {
  loginController.logoutGet(req, res, next);
});

// GET /login
router.get("/login", mid.loggedOut, function (req, res, next) {
  loginController.loginGet(req, res, next);
});

// POST /login
router.post("/login", function (req, res, next) {
  loginController.loginPost(req, res, next);
});

// GET /register
router.get("/register", mid.loggedOut, function (req, res, next) {
  loginController.registerGet(req, res, next);
});

// POST /register
router.post("/register", function (req, res, next) {
  loginController.registerPost(req, res, next);
});

// GET /
router.get("/", function (req, res, next) {
  return res.render("index", { title: "Home" });
});

module.exports = router;
