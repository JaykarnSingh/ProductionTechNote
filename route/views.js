// route.js

const express = require('express');
const router = express.Router();
const controller = require('../contollers/views');

router.get('/api/viewcount', controller.showViewCount);
router.post('/api/viewcount', controller.incrementViewCount);

module.exports = router;
