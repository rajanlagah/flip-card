import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.css";
import TileContainer from "../../container/Tile";

const GameUI = ({ randomEmojis, handleClick, selectedIndexByUser }) => {
  return (
    <div className="game-container">
      {randomEmojis.map((item, index) => (
        <TileContainer
          key={uuidv4()}
          emoji={item}
          handleClick={handleClick}
          index={index}
          selectedIndexByUser={selectedIndexByUser}
        />
      ))}
    </div>
  );
};

export default GameUI;
