const express = require('express');
const router  = express.Router();
const {
  getAllUsers,
  createNewUser,
  filtrarUsers,
  filtrarPbx
} = require('../controllers/usersController');

router.get('/', getAllUsers);
router.post('/', createNewUser);
router.get('/mailfilter', filtrarUsers);
router.get('/pbxfilter', filtrarPbx);

module.exports = router;
