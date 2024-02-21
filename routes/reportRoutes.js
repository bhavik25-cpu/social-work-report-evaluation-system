const express = require('express');
const router = express.Router();
const { validateCreateReport, validateUpdateReport, handleValidationErrors } = require('../middleware/validationMiddleware');
const reportController = require('../controller/reportController');

// Create a new report
router.post('/', validateCreateReport, handleValidationErrors, reportController.createReport);

// Get all reports
router.get('/', reportController.getAllReports);

// Get report by ID
router.get('/:id', reportController.getReportById);

// Update report by ID
router.put('/:id', validateUpdateReport, handleValidationErrors, reportController.updateReport);

// Delete report by ID
router.delete('/:id', reportController.deleteReport);

router.post('/updatePoints', reportController.updatePoints);


module.exports = router;
