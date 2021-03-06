import React, { useState, useEffect } from 'react';
import './Token.css';

const GET_TOKEN_URL = "/getAccessToken";

function Token() {

    const [token, setToken] = useState(null);

    useEffect(() => {
        fetch(GET_TOKEN_URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            }).then(data => setToken(data))
            .catch(err => console.log(err));
    });

    return (
        <span className="token-container">
            <p className="token-message">
                <strong>Current access token:</strong>
            </p>
            <p className="token-message">
                {getTokenMessage()}
            </p>
        </span>
    );

    function getTokenMessage() {
        if (token) {
            return token;
        } else {
            return "There is currently no access token";
        }
    }
}

export default Token;
