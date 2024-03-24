const indexRouter = require("./routes/index");
const toolsRouter = require("./routes/tools");

const fightartRouter = require("./routes/class");

module.exports = (app) => {
  app.use("/", indexRouter);
  app.use("/ferramentas", toolsRouter);
  app.use("/classes", fightartRouter);

  app.use((req, res) => {
    res.render("pages/errors/404");
  });
};
