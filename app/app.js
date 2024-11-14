// app.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const leakageRoutes = require("./routes/leakageRoutes.js");
const auditRoutes = require("./routes/auditRoutes.js");
const claimRoutes = require("./routes/claimRoutes.js");
const policyRoutes = require('./routes/policyRoutes.js');
const customerRoutes = require("./routes/customerRoutes.js");
const appraisalRoutes = require("./routes/appraisalRoutes.js");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json()); // Using express.json() instead of body-parser

// Routes
app.get("/", (req, res) => res.send("ASAS"));
app.use("/api/leakage", leakageRoutes);
app.use("/api/audit", auditRoutes);
app.use("/api/claim", claimRoutes);
app.use("/api/policy", policyRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/appraisal", appraisalRoutes);
// https://dasbboard-backend.vercel.app/api/audit
// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error for debugging
  res.status(500).send('Something went wrong!');
});

// Starting the server
const PORT = process.env.PORT || 5051;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
