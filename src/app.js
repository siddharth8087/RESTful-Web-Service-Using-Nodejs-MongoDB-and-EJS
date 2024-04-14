require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const { connectDB } = require("./database/connectdb");
const DBURI = process.env.DBURI;

const { join } = require("path");
const routes = require("./routes/routes");

//middlewear...
app.use(express.urlencoded({ extended: true }));

//set an ejs file
app.set("view engine", "ejs");
app.set("views", "C:/Assignment/crud_rest_api_nodejs/src/views");

// static files
app.use("/person", express.static(join(process.cwd(), "public")));

//routes
app.use("/person", routes);
connectDB(DBURI, () => {
  console.log("Database Connected Succesfully");
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
