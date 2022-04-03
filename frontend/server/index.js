const { EXPRESS_PLAYERS } = require('./expressData');
const { AUTHORIZE_REQUEST_URL } = require('./oauth.js');
const express = require("express");
const path = require("path");
const app = express();

let accessToken = null;
let tokenExpiresAt = null;
let refreshToken = null;

app.use(express.static(path.join(__dirname, "..", "build")));

// app.get("/myFavouritePlayersInTheNBA", (req, res) => {
app.get("/players", (req, res) => {
    if (isValid()) {
        // TODO get data, merge it with local and return
    } else if(refreshToken) {
        // TODO refresh and then get data, merge with local etc..        
    } else {
        console.log(AUTHORIZE_REQUEST_URL);        
        res.redirect(AUTHORIZE_REQUEST_URL);
    }
});

app.get("/authorizationCallback", (req, res) => {
    console.log(req.query.code);
    // TODO exchange the code for the acces token
    res.send("Callback was called");
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