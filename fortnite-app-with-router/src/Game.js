import React from 'react';
import { Link } from 'react-router-dom';

const Game = props => (
  <div className="row">
    {props.items.map(item => (
      <div key={item.id} className="col-md-3">
          <img
            className="game-box-img"
            src={item.background_image}
            alt={item.name} />
            <Link className="game-box" to={`games/${item.id}`}>
              <h5 className="game-font">{item.name}</h5>
            </Link>
          <p className="game-font">Rating: {item.rating}</p>
      </div>
    ))}
  </div>

);



export default Game;