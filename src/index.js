const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const route = require("./routes");
const db = require("./config/db/index");

//connect db
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// app.use(morgan('combined'))

app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a+b
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
