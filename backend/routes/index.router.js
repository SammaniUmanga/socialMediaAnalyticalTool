const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlVideo = require('../controllers/video.controller');
const ctrlSearch = require('../controllers/search.controller');
const jwtHelper = require('../config/jwtHelper');


router.post('/register', ctrlUser.register); 
router.post('/authenticate', ctrlUser.authenticate);
router.get('/getUsers', ctrlUser.getUsers);

router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/getVideos', ctrlVideo.getVideos );

router.post('/search', ctrlSearch.searchKey); 
router.post('/postdata', ctrlSearch.getSearchVideo);


module.exports = router;