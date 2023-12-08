import React, { useEffect, useState } from "react";
import GameUI from "../../component/GameArea";

const GameArea = () => {
  const EMOJIS = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const [randomEmojis, setRandomEmojis] = useState([]);
  const [selectedIndexByUser, setselectedIndexByUser] = useState([]);

  const [firstSelectedCard, setfirstSelectedCard] = useState();
  const [turn, setTurn] = useState("firstCard");

  /**
   *  arr = [16]
   *  for e in emojis
   *      a[Math.random()*16] = e // if(a[index] !== 0)
   *      a[Math.random()*16] = e // if(a[index] !== 0)
   *
   */
  const distributeEmojis = () => {
    const emojiToIndexMap = new Array(16).fill("-1");

    for (let i = 0; i < 8; i++) {
      let firstEmojiIndex = Math.floor(Math.random() * 16);
      let secondEmojiIndex = Math.floor(Math.random() * 16);
      while (emojiToIndexMap[firstEmojiIndex] !== "-1") {
        firstEmojiIndex = Math.floor(Math.random() * 16);
      }
      emojiToIndexMap[firstEmojiIndex] = EMOJIS[i];
      while (emojiToIndexMap[secondEmojiIndex] !== "-1") {
        secondEmojiIndex = Math.floor(Math.random() * 16);
      }
      emojiToIndexMap[secondEmojiIndex] = EMOJIS[i];
    }
    setRandomEmojis(emojiToIndexMap);
  };

  useEffect(() => {
    distributeEmojis();
  }, []);

  const handleClick = (emojiValue, selectedIndex) => {
    let openIndex = [...selectedIndexByUser];

    if (turn === "firstCard") {
      setfirstSelectedCard(emojiValue);
      setTurn("secondCard");
      openIndex = [];
      openIndex.push(selectedIndex);
    } else if (turn === "secondCard") {
      setTurn("firstCard");

      if (firstSelectedCard === emojiValue) {
        openIndex = [];
        setRandomEmojis(randomEmojis.filter((item) => item !== emojiValue));
      } else {
        openIndex.push(selectedIndex);
      }
    }
    setselectedIndexByUser(openIndex);
  };

  return (
    <GameUI
      randomEmojis={randomEmojis}
      handleClick={handleClick}
      selectedIndexByUser={selectedIndexByUser}
    />
  );
};

export default GameArea;
