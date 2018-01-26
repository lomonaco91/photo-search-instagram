"use strict"

const express = require('express');
const router = express.Router();

const instagramController = require('../controllers/instagram-controller');

router
    .get('/:hashtag',  instagramController.getImagesByHashTag);

module.exports = router;
