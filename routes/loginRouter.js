var loginController = require("../controller/loginController");
const express = require("express");
var mid = require("../middleware");
const router = express.Router();

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

module.exports = router;