const express = require("express"),
  path = require("path"),
  logger = require("morgan"),
  cookieParser = require("cookie-parser"),
  cors = require("cors");

require("dotenv").config();

const app = express();

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public/")));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

require("./src/routes")(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor ON`);
});

process.on("uncaughtException", (err) => {
  console.error(err);
});
