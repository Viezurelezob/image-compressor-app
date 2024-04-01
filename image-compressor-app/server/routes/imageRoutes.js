const express = require('express');
const { sendImage } = require('../controllers/imageController');
const { uploadAndCompressImage } = require('../controllers/imageController');

const router = express.Router();

router.get('/dynamic-images/:imageName', sendImage);
router.post('/upload', uploadAndCompressImage);

module.exports = router;

