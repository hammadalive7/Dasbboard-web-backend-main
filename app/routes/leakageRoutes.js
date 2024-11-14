const express = require("express");
const router = express.Router();
const { createLeakage, getLeakages, getLeakagesByClaimId, updateLeakage } = require("../controllers/leakageController");

// Route to create a new leakage
router.post("/leakages", createLeakage);

// Route to get all leakages
router.get("/leakages", getLeakages);

// Route to get all leakages by Claim ID
router.get("/leakages/claim/:claimId", getLeakagesByClaimId);

// Route to update a leakage by ID
router.put("/leakages/:id", updateLeakage);

module.exports = router;


