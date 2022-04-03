import React, { useState, useEffect } from 'react';
import './Token.css';

function Token(props) {

    const [token, setToken] = useState(null);

    useEffect(() => {
        fetch(props.getTokenUrl)
            .then(resp => resp.json)
            .then(resp => setToken(resp))
            .catch(err => console.log(err));
    }, [props.getTokenUrl]);

    return (
        <span className="token-container">
            <p className="token-message">
                Current {props.name}:
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