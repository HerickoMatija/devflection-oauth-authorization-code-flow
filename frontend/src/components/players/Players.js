import React, { useState, useCallback } from 'react';
import './Players.css';

const GET_FAVOURITE_PLAYERS_URL = "/myFavouritePlayersInTheNBA";

function Players() {
    const [favouritePlayers, setFavouritePlayers] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = useCallback(
        () => {
            fetch(GET_FAVOURITE_PLAYERS_URL)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                }).then(data => setFavouritePlayers(data))
                .catch(err => console.log(err));
        },
        [setFavouritePlayers]
    );

    return (
        <div className='players-container'>
            <button onClick={fetchData}>Get favourite players!</button>
            {getPlayers()}
        </div>
    );

    function getPlayers() {
        if (error) {
            let currentError = error;
            setError(null);
            return <span>There was a problem retrieving the players: {currentError} </span>
        }

        if (favouritePlayers.length > 0) {
            let playerList = favouritePlayers.map(player => { return <li>{player}</li> });
            return <ul>{playerList}</ul>;
        } else {
            return <span>No favourite players!</span>;
        }
    }
}

export default Players;