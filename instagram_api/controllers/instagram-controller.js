"use strict"

const _instagramService = require('../services/instagram-service');

function getImagesByHashTag(req, res) {
    _instagramService.getImagesByHashTag(req.params.hashtag)
    .then(result => res.status(200).json(result))
    .catch(error => res.status(404).json(error))
}

module.exports = { getImagesByHashTag }
