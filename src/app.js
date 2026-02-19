const express = require("express");
const healthRoutes = require("./routes/health.routes");
const helloRoutes = require("./routes/hello.routes");

const app = express();
app.use(express.json());
app.use("/api", healthRoutes);
app.use("/api", helloRoutes);

module.exports = app;
