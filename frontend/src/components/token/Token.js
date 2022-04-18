import React, { useState, useEffect } from 'react';
import './Token.css';

function Token(props) {

    const [token, setToken] = useState(null);

    useEffect(() => {
        fetch(props.getTokenUrl)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            }).then(data => setToken(data))
            .catch(err => console.log(err));
    }, [props.getTokenUrl]);

    return (
        <span className="token-container">
            <p className="token-message">
                <strong>Current {props.name}:</strong>
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
            return "There is currently no " + props.name;
        }
    }
}

export default Token;