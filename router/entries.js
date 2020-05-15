const express = require('express');

const router = express.Router();

router.post('/signup',require('../controller/entries'));

module.exports = router;