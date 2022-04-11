import React, { useState, useCallback } from 'react';
import './Players.css';

const GET_FAVOURITE_PLAYERS_URL = "http://localhost:5000/myFavouritePlayersInTheNBA"

function Players() {
    const [favouritePlayers, setFavouritePlayers] = useState([])

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
        if (favouritePlayers.length > 0) {
            let playerList = favouritePlayers.map(player => {return <li>{player}</li>});
            return <ul>{playerList}</ul>;
        } else {
            return <span>No favourite players!</span>;
        }
    }
}

export default Players;