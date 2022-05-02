import fetch from "node-fetch";
import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();

let accessToken = null;

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/myFavouritePlayersInTheNBA", async (req, res) => {
    await fetch(process.env.RESOURCE_SERVER_PLAYERS_ENDPOINT, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(data => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    }).catch(err => res.sendStatus(err.status));
});

app.get("/startOAuthFlow", (req, res) => {
    const authorizeRedirectUrl = prepareAuthorizeRedirectUrl()
    res.redirect(authorizeRedirectUrl);
});

app.get("/authorizationCallback", async (req, res) => {
    await fetch(process.env.TOKEN_ENDPOINT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: new URLSearchParams({
            'grant_type': 'authorization_code',
            'code': req.query.code,
            'client_id': process.env.CLIENT_ID,
            'client_secret': process.env.CLIENT_SECRET,
            'redirect_uri': process.env.REDIRECT_URI
        })
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(data => {
        accessToken = data.access_token;
        res.redirect("/index.html");
    }).catch(err => res.send(err));
});

app.get("/getAccessToken", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(accessToken));
});

app.listen(5000, () => {
    console.log("Express server started on port 5000");
});

function prepareAuthorizeRedirectUrl() {
    const redirectUri = encodeURIComponent(process.env.REDIRECT_URI);
    return `${process.env.AUTHORIZE_REQUEST_URL}?response_type=code&scope=${process.env.SCOPE}&state=xyz&client_id=${process.env.CLIENT_ID}&redirect_uri=${redirectUri}`;
}
