import React, { useState, useEffect } from 'react';
 
const TopGames = () => {
 
    const [games, setGames] = useState([]);
 
    useEffect(() => {
        fetch("https://bgg-json.azurewebsites.net/hot")
            .then(response => response.json())
            .then(data => setGames(data));
    });
 
    return (
        <div>
            {
                games.map(game => <p>{game.title}</p>)
            }
        </div>
    )
}
export default TopGames;