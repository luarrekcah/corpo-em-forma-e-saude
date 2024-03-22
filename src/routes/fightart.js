const express = require("express"),
  router = express.Router();

router.get("/bjj", async (req, res, next) => {
  res.render("pages/figth-arts/bjj");
});

router.get("/karate", async (req, res, next) => {
  res.render("pages/figth-arts/karate");
});

module.exports = router;
