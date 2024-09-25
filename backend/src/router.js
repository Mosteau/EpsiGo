const express = require("express");

const router = express.Router();

const { hashPassword } = require("./services/auth");
/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");
const authControllers = require("./controllers/authControllers");

// ROAD AUTH
router.post("/login", authControllers.login);

// Road of users
router.get("/users", userControllers.browse); // OK
router.get("/users/:id", userControllers.read); // OK
router.post("/users", hashPassword, userControllers.add); // OK

/* ************************************************************************* */

module.exports = router;
