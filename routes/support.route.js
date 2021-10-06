const express = require('express');
const router  = express.Router();
const {supportGet} = require('../controllers/supportController');

router.get('/', supportGet);

module.exports = router;
