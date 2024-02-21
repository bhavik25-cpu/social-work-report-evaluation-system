const reportModel = require('./reportModel');

// Update report points based on user answer
exports.updatePoints = async (id, questionIndex, optionIndex) => {
  const updatedReport = await reportModel.updatePoints(id, questionIndex, optionIndex);
  return updatedReport;
};
// Create a new report
exports.createReport = async (reportData) => {
  try {
    const report = await reportModel.createReport(reportData);
    return report;
  } catch (error) {
    throw error;
  }
};

// Get all reports
exports.getAllReports = async () => {
  try {
    const reports = await reportModel.getAllReports();
    return reports;
  } catch (error) {
    throw error;
  }
};

// Get report by ID
exports.getReportById = async (id) => {
  try {
    const report = await reportModel.getReportById(id);
    return report;
  } catch (error) {
    throw error;
  }
};

// Update report by ID
exports.updateReport = async (id, reportData) => {
  try {
    const updatedReport = await reportModel.updateReport(id, reportData);
    return updatedReport;
  } catch (error) {
    throw error;
  }
};

// Delete report by ID
exports.deleteReport = async (id) => {
  try {
    await reportModel.deleteReport(id);
  } catch (error) {
    throw error;
  }
};
