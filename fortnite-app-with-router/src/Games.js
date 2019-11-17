import React, { useState, useEffect } from 'react';
import Game from './Game';

const Games = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "16d03a7afbmsh2799cd8b910e52cp1b2e9cjsn07490c8c4c3b"
      }
    });
    const items = await data.json();
    const games = items.results
    console.log("data: ", games);
    setItems(games);
  };

  return (
    <div className="container">
      <h1>Games</h1>
        <Game items={items} />
    </div>

  );
}

export default Games;
