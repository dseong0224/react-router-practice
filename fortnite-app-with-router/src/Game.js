import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

const Game = ({ match }) => {
  useEffect(() => {
    fetchItem(match);
    console.log("match: ", match);
  }, [match]);

  const [game, setGame] = useState({});

  const fetchItem = async (match) => {
    const data = await fetch(`https://rawg-video-games-database.p.rapidapi.com/games/${match.params.game}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "16d03a7afbmsh2799cd8b910e52cp1b2e9cjsn07490c8c4c3b"
      }
    })

    const game = await data.json();
    setGame(game)
    console.log("game after render: ", game);
  };

  return (
    <div>
      <h1>
        {game.name}
      </h1>
      <img src={game.background_image} alt={game.name}/>
    </div>
  );
}

export default Game;
