const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { authenticateUser } = require("../middlewares/authMiddleware");

// Create a new user
router.post("/users", createUser);

// Get all users (protected route)
router.get("/users", authenticateUser, getAllUsers);

// Update user by ID (protected route)
router.put("/users/:id", authenticateUser, updateUser);

// Delete user by ID (protected route)
router.delete("/users/:id", authenticateUser, deleteUser);

module.exports = router;
