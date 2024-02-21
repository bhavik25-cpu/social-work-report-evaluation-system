const { validationResult } = require('express-validator');
const reportService = require('../DB/reportService');
exports.updatePoints = async (req, res) => {
    try {
      const { id, questionIndex, optionIndex } = req.body;
      const updatedReport = await reportService.updatePoints(id, questionIndex, optionIndex);
      res.json(updatedReport);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
// Create a new report
exports.createReport = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const report = await reportService.createReport(req.body);
    res.status(201).json(report);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Get all reports
exports.getAllReports = async (req, res) => {
  try {
    const reports = await reportService.getAllReports();
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Get report by ID
exports.getReportById = async (req, res) => {
  try {
    const report = await reportService.getReportById(req.params.id);
    if (!report) {
      return res.status(404).json({ msg: 'Report not found' });
    }
    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Update report by ID
exports.updateReport = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedReport = await reportService.updateReport(req.params.id, req.body);
    res.json(updatedReport);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Delete report by ID
exports.deleteReport = async (req, res) => {
  try {
    await reportService.deleteReport(req.params.id);
    res.json({ msg: 'Report deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
