const express = require("express");
const path = require("path");

const api = require("./routes/api");

// Express setup
const app = express();
const { PORT = 8080 } = process.env;
const PUBLIC_DIR = path.join(__dirname, "public");

app.set("view engine", "ejs");
app.use(express.static(PUBLIC_DIR));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/cars", api.cars());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
