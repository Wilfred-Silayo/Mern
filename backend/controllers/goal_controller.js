const asyncHandler = require("express-async-handler");
const Goal = require("../models/goal_model");
const User = require("../models/user_model");

/**
 * @desc get goals
 * @route get /api/goals
 * @access private
 */

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json({
    goals,
  });
});

/**
 * @desc set goal
 * @route post /api/goals
 * @access private
 */

const setGoal = asyncHandler(async (req, res) => {
  // console.log(req.body)
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json({
    goal,
  });
});

/**
 * @desc update goal
 * @route put /api/goals
 * @access private
 */

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw Error("User not found");
  }
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    updatedGoal,
  });
});

/**
 * @desc delete goals
 * @route delete /api/goals
 * @access private
 */

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw Error("User not found");
  }
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw Error("User not authorized");
  }

  await goal.deleteOne();

  res.status(200).json(req.params.id);
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
