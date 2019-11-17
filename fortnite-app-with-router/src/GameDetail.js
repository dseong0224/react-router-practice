import React, { useState, useEffect } from 'react';
import Parser from 'html-react-parser';

const GameDetail = ({ match }) => {
  useEffect(() => {
    fetchItem(match);
    console.log("match: ", match);
  }, [match]);

  const [game, setGame] = useState({});

  const fetchItem = async (match) => {
    const data = await fetch(`https://rawg-video-games-database.p.rapidapi.com/games/${match.params.gameId}`, {
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
    <div className="container">
      <h3>{game.name}</h3>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img
            className="game-detail-img col-12"
            src={game.background_image}
            alt={game.name} />
          <p><a href={game.website} target="__blank">{game.website}</a></p>
          <p>Playtime: {game.playtime}</p>
        </div>


        <div className="col-md-6 game-description">{Parser(`${game.description}`)}</div>
      </div>
    </div>
  );
}

export default GameDetail;
