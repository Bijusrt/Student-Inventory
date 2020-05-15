const express = require('express');

var middleware = require('../middleware/deletetoken')

const router = express.Router();

router.delete('/delete/:userid/:username',middleware,require('../controller/delete'));

module.exports = router;