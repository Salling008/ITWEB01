var workoutController = require("../controller/workoutController");
var mid = require("../middleware");

// const express = require("express");


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

  module.exports = router;