const reportModel = require('./reportModel');

exports.updatePoints = async (id, questionIndex, optionIndex) => {
  const updatedReport = await reportModel.updatePoints(id, questionIndex, optionIndex);
  return updatedReport;
};
exports.createReport = async (reportData) => {
  try {
    const report = await reportModel.createReport(reportData);
    return report;
  } catch (error) {
    throw error;
  }
};

exports.getAllReports = async () => {
  try {
    const reports = await reportModel.getAllReports();
    return reports;
  } catch (error) {
    throw error;
  }
};

exports.getReportById = async (id) => {
  try {
    const report = await reportModel.getReportById(id);
    return report;
  } catch (error) {
    throw error;
  }
};

exports.updateReport = async (id, reportData) => {
  try {
    const updatedReport = await reportModel.updateReport(id, reportData);
    return updatedReport;
  } catch (error) {
    throw error;
  }
};

exports.deleteReport = async (id) => {
  try {
    await reportModel.deleteReport(id);
  } catch (error) {
    throw error;
  }
};
