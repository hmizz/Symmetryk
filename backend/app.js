const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database/db.js");
  
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const companiesRoutes = require("./routes/companies");
const presentationsRoutes = require("./routes/presentations");
const slidesRoutes = require("./routes/slides");

const app = express();

  db.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
    console.log('server is running...')
  })
  .catch((error)=>{
    console.log("connection couldn't be established");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/user",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/company",companiesRoutes);
app.use("/api/presentations",presentationsRoutes);
app.use("/api/slides", slidesRoutes);

module.exports = app;