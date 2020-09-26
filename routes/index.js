const express = require("express");
const { check, validationResult } = require("express-validator");
var mid = require("../middleware");
var User = require("../models/user");
var loginController = require("../controller/loginController");
var workoutController = require("../controller/workoutController");
var URLSearchParams = require("url-search-params");
const router = express.Router();

// GET /workout
router.get("/workout", function (req, res, next) {
  workoutController.workoutGet(req, res, next);
});

// GET /createWorkout
router.get("/createWorkout", mid.requiresLogin, function (req, res, next) {
  workoutController.workoutCreateGet(req, res, next);
});

// GET /detailedWorkout
router.get("/detailedWorkout", mid.requiresLogin, function (req, res) {
  let id = req.param("id");
  workoutController.detailedWorkoutGet(req, res, id);
});

// GET /addExercise
router.get("/addExercise", mid.requiresLogin, function (req, res) {
  let id = req.param("id");
  workoutController.addExerciseToWorkoutGet(req, res, id);
});

// POST /addExercise
router.post("/addExercise", mid.requiresLogin, function (req, res) {
  let id = req.param("id");
  workoutController.addExerciseToWorkoutPost(req, res, id);
});

// POST /createWorkout
router.post("/createWorkout", mid.requiresLogin, function (req, res, next) {
  workoutController.workoutCreatePost(req, res, next);
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
  return res.render("index");
});

module.exports = router;
