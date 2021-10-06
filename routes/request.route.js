const express = require('express');
const router  = express.Router();
const {getAllRequests, createNewRequest} = require('../controllers/requestController');

router.get('/', getAllRequests);
router.post('/', createNewRequest);

module.exports = router;
