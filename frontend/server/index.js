const { EXPRESS_PLAYERS } = require('./expressData');
const { AUTHORIZE_REQUEST_URL, TOKEN_ENDPOINT_URL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require('./oauth.js');
const express = require("express");
const path = require("path");
var cors = require('cors')
const app = express();

let accessToken = null;
let tokenExpiresAt = null;
let refreshToken = null;

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/myFavouritePlayersInTheNBA", (req, res) => {
    if (isValid()) {
        // TODO get data, merge it with local and return
    } else if (refreshToken) {
        // TODO refresh and then get data, merge with local etc..        
    } else {
        res.send(EXPRESS_PLAYERS);
    }
});

app.get("/startOAuthFlow", (req, res) => {
    res.redirect(AUTHORIZE_REQUEST_URL);
});

app.get("/authorizationCallback", async (req, res) => {
    await fetch(TOKEN_ENDPOINT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: new URLSearchParams({
            'grant_type': 'authorization_code',
            'code': req.query.code,
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'redirect_uri': REDIRECT_URI
        })
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(data => res.send(data))
    .catch(err => res.send(err));
});

app.get("/getAccessToken", (req, res) => {
    res.send(accessToken);
});

app.get("/getRefreshToken", (req, res) => {
    res.send(refreshToken);
});

app.listen(5000, () => {
    console.log("Express server started on port 5000");
});


function isValid() {
    return Date.now() < (tokenExpiresAt - 5);
}