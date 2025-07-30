const express = require('express')
const router = express.Router();

const imageUpload = require('../controllers/imageUpload')
const videoUplaod = require('../controllers/videoUpload')
const imageReducerUpload = require('../controllers/imageReducerUpload')
const localFileUpload = require('../controllers/localFileUpload')

router.post('/imageUpload', imageUpload);
router.post('/videoUpload', videoUplaod);
router.post('/imageReducerUplead', imageReducerUpload);
router.post('/localFileUpload', localFileUpload);


module.exports = router