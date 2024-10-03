const express = require("express");
const sendMessage = require("../controllers/client");
const router = express.Router();

router.route("/sendMessage").post(sendMessage);

module.exports = router;
