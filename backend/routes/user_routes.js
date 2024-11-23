const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/user_controller");
const protect = require("../middleware/auth_middleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me",protect, getUser);

module.exports = router;
