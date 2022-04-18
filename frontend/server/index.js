import fetch from "node-fetch";
import { EXPRESS_PLAYERS } from "./expressData.js";
import {AUTHORIZE_REQUEST_URL, TOKEN_ENDPOINT_URL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI} from './oauth.js';
import express from 'express';
import path from 'path';
import cors from 'cors';
import {fileURLToPath} from 'url';


const app = express();

let accessToken = null;
let tokenExpiresAt = null;
let refreshToken = null;

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/myFavouritePlayersInTheNBA", (req, res) => {
    let allPlayers = []
    if (isValid()) {
        // TODO get data, merge it with local and return
    } else if (refreshToken) {
        // TODO refresh and then get data, merge with local etc..        
    }
    allPlayers.push(...EXPRESS_PLAYERS);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(allPlayers));
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
    }).then(data => {
        accessToken = data.access_token;
        refreshToken = data.refresh_token;
        tokenExpiresAt = data.expires_in;
        res.redirect("/index.html");
    }).catch(err => res.send(err));
});

app.get("/getAccessToken", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(accessToken));
});

app.get("/getRefreshToken", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(refreshToken));
});

app.listen(5000, () => {
    console.log("Express server started on port 5000");
});


function isValid() {
    return Date.now() < (tokenExpiresAt - 5);
}