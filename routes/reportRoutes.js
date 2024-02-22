const express = require('express');
const router = express.Router();
const { validateCreateReport, validateUpdateReport, handleValidationErrors } = require('../middleware/validationMiddleware');
const reportController = require('../controller/reportController');

router.post('/', validateCreateReport, handleValidationErrors, reportController.createReport);

router.get('/', reportController.getAllReports);

router.get('/:id', reportController.getReportById);

router.put('/:id', validateUpdateReport, handleValidationErrors, reportController.updateReport);

router.delete('/:id', reportController.deleteReport);

router.post('/updatePoints', reportController.updatePoints);


module.exports = router;
