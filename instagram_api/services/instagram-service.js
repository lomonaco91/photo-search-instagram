"use strict"

const request = require('request');

const instagramToken = '1958486664.7457699.cd65b247aef34d38811ce73b6bd9cb43';

function getImagesByHashTag(tag) {
    var options = {
      url: `https://api.instagram.com/v1/tags/${tag}/media/recent?access_token=${instagramToken}&pagination=1`,
      headers: {
        'access_token': instagramToken,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return new Promise((resolve, reject) => {
        request.get(options, (err, res, body) => {
            if (err) reject(err);
            resolve(JSON.parse(body));
        });
    });
}

// var accessToken = '6971590961.573f435.e94b9dfe0fda40b582947247b0ffecf0';
// var InstagramAPI = require('instagram-api');
// var instagramAPI = new InstagramAPI(accessToken);

// function getImagesByHashTag(tag) {
//     return instagramAPI.getMediasByTag(tag)
// }

module.exports = {
    getImagesByHashTag
}