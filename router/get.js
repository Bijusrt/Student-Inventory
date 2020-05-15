const express = require('express');

var middleware = require('../middleware/token')

const router = express.Router();

router.get('/all',middleware,require('../controller/get').getall);

router.get('/:userid',require('../controller/get').get);

module.exports = router;