const express = require('express');
const { getItems } = require('../controllers/itemController');

const router = express.Router();

router.route('/').get(getItems);

module.exports = router;