const express = require('express');
const { handleFileUpload } = require('../controllers/uploadController');

const router = express.Router();

router.post('/upload', handleFileUpload);

module.exports = router;
