const express = require("express"),
  router = express.Router();

router.get("/bjj", async (req, res, next) => {
  res.render("pages/class/bjj");
});

router.get("/karate", async (req, res, next) => {
  res.render("pages/class/karate");
});

router.get("/funcional", async (req, res, next) => {
  res.render("pages/class/funcional");
});

router.get("/danca", async (req, res, next) => {
  res.render("pages/class/danca");
});

module.exports = router;
