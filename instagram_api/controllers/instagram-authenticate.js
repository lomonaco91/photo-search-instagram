"use strict"

//authorize all: https://www.instagram.com/oauth/authorize/?client_id=573f4352bde549a68889d1d5698cf283&redirect_uri=
//http://localhost:8080/&response_type=code&scope=basic+comments+follower_list+likes+relationships+public_content

const clientId = '573f4352bde549a68889d1d5698cf283';

function redirectAuth(req, res, next) {
    res.redirect(`https://api.instagram.com/oauth/authorize/?client_id=${clientId}&client_secret=f84179213fa240199c11980951d4d091&redirect_uri=http://localhost:8080/&response_type=token`)
}

module.exports = { redirectAuth }
