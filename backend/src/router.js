const express = require("express");

const router = express.Router();

const { hashPassword } = require("./services/auth");

const userControllers = require("./controllers/userControllers");
const authControllers = require("./controllers/authControllers");

router.post("/login", authControllers.login);

router.get("/users", userControllers.browse); // TEST OK
router.get("/users/:id", userControllers.read); // TEST OK
router.post("/users", hashPassword, userControllers.add); // TEST OK

module.exports = router;
