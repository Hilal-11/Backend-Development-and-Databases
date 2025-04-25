const express = require('express');
const router = express.Router();

const imageUpload = require('../controllers/imageUpload')
const videoUpload = require('../controllers/videoUpload')
const imageReducerUpload = require('../controllers/imageReducerUpload')
const localFileUpload = require('../controllers/localFileUpload')


router.post('/imageUpload', imageUpload);
router.post('/videoUpload', videoUpload);
router.post('/imageReducerUpload', imageReducerUpload);
router.post('/localFileUpload', localFileUpload);


module.exports = router

