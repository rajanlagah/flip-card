import React from "react";

import "./style.css";

const Tile = ({ emoji, handleClick, isHidden }) => {
  return (
    <div
      onClick={() => handleClick(emoji)}
      className="emoji-tile"
      role="button"
    >
      {isHidden ? "" : emoji}
    </div>
  );
};

export default Tile;
