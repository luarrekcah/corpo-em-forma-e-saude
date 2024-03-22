const express = require("express"),
  router = express.Router();

router.get("/", async (req, res, next) => {
  res.render("pages/index");
});

router.get("/contato", async (req, res, next) => {
  res.render("pages/contact");
});

module.exports = router;