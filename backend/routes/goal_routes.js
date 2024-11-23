const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goal_controller");
const protect = require("../middleware/auth_middleware");

// router.get('/',getGoals)

// router.post('/',setGoal)

// router.put('/:id',updateGoal)

// router.delete('/:id',deleteGoal)

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
