var mongoose = require("mongoose");

var exerciseSchema = new mongoose.Schema({
  exercise: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  set: {
    type: int,
    required: true,
  },
  reps: {
    type: String,
    required: true,
  },
});

var workoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});
