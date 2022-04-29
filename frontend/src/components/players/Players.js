import React, { useState, useCallback } from 'react';
import './Players.css';

const GET_FAVOURITE_PLAYERS_URL = "/myFavouritePlayersInTheNBA";

function Players() {
    const [favouritePlayers, setFavouritePlayers] = useState([]);
    const [error, setError] = useState('');

    const fetchData = useCallback(
        () => {
            fetch(GET_FAVOURITE_PLAYERS_URL)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                }).then(data => setFavouritePlayers(data))
                .catch(err => {
                    if (err.status === 401) {
                        setError("The request was rejected as unathorized!");
                    } else {
                        setError("There was a problem with the request!");
                    }                    
                });
        },
        [setFavouritePlayers, setError]
    );

    return (
        <div className='players-container'>
            <span className='players-message'>
                <button className="btn" onClick={fetchData}>Get favourite players!</button>
            </span>
            <span className='players-message'>
                {getPlayers()}
            </span>            
        </div>
    );

    function getPlayers() {
        if (error) {            
            return <p>{error}</p>
        }

        if (favouritePlayers.length > 0) {
            let playerList = favouritePlayers.map(player => { return <li>{player}</li> });
            return <ul>{playerList}</ul>;
        } else {
            return <p>No favourite players!</p>;
        }
    }
}

export default Players;
