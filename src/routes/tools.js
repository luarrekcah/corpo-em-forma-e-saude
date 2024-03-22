const express = require("express"),
  router = express.Router();

router.get("/imc", async (req, res, next) => {
  res.render("pages/tools/imc");
});

module.exports = router;