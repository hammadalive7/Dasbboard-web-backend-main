const Leakage = require("../models/Leakage");

exports.createLeakage = async (req, res) => {
  try {
    const leakage = new Leakage(req.body);
    await leakage.save();
    res.status(201).json(leakage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLeakages = async (req, res) => {
  try {
    const leakages = await Leakage.find();
    res.status(200).json(leakages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLeakagesByClaimId = async (req, res) => {
  const { claimId } = req.params;
  try {
    const leakages = await Leakage.find({ claimId });
    if (leakages.length === 0) {
      return res.status(404).json({ message: "No leakages found for the specified claim ID" });
    }
    res.status(200).json(leakages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLeakage = async (req, res) => {
  const { id } = req.params;  // Changed _id to id
  try {
    const updatedLeakage = await Leakage.findByIdAndUpdate(id, req.body, {
      new: true, // Returns the updated document
      runValidators: true, // Enforces schema validation
    });
    if (!updatedLeakage) {
      return res.status(404).json({ message: "Leakage not found" });
    }
    res.status(200).json(updatedLeakage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
