const { body, validationResult } = require('express-validator');

const validateCreateReport = [
  body('category').notEmpty().withMessage('Category is required'),
  body('questions').isArray().withMessage('Questions must be an array'),
  body('points').isNumeric().withMessage('Points must be a number'),
];

const validateUpdateReport = [
  body('category').optional().notEmpty().withMessage('Category is required'),
  body('questions').optional().isArray().withMessage('Questions must be an array'),
  body('points').optional().isNumeric().withMessage('Points must be a number'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateCreateReport,
  validateUpdateReport,
  handleValidationErrors,
};
