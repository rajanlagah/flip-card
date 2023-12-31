import React from "react";
import Tile from "../../component/Tile";

const TileContainer = ({ emoji, handleClick, index, selectedIndexByUser }) => {
  const handleTileClick = (clickedEmoji) => {
    handleClick(clickedEmoji, index);
  };

  return (
    <Tile
      isHidden={!selectedIndexByUser.includes(index)}
      emoji={emoji}
      handleClick={(clickedEmoji) => handleTileClick(clickedEmoji)}
    />
  );
};

export default TileContainer;
