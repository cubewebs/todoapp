// Routes for duty
const express = require('express');
const router = express.Router();
const dutyController = require('../controllers/dutyController');

// api/duties
router.post('/', dutyController.createDuty);
router.get('/', dutyController.getDuties);
router.put('/:id', dutyController.updateDuty);
router.get('/:id', dutyController.getDuty);
router.delete('/:id', dutyController.deleteDuty);

module.exports = router;