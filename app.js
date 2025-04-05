const express = require("express");

const ProductRoutes = require("./routes/product.route");

const app = express();

//middleware that parses the body of the request and makes it available in the req.body object
app.use(express.json());

//root route, used to check if the server is running
app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

//telling the server to use the routes in the ProductRoutes file
app.use("/api", ProductRoutes);

module.exports = app;