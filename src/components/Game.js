import React, { useState, useEffect, useRef } from "react";
import "../styles/Card.css";
import cardArray from "./CardData";

const Game = () => {
  const [card, setCard] = useState(cardArray);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const scoreRef = useRef();
  const maxScoreRef = useRef();

  maxScoreRef.current = maxScore;
  scoreRef.current = score;

  useEffect(() => {
    const handleClick = (e) => {
      let clickedCard = parseInt(e.target.dataset.id);
      if (card[clickedCard - 1].clicked === true) {
        gameReset();
      } else {
        updateCard(clickedCard);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const updateCard = (clickedCard) => {
    let old = [...card];
    setCard(
      old.map((card) => {
        if (card.name === clickedCard) {
          card.clicked = true;
        }
        return card;
      })
    );
    handleScore(true);
    shuffleCard(old);
  };

  const shuffleCard = (old) => {
    setCard(old.sort(() => 0.5 - Math.random()));
  };

  const gameReset = () => {
    handleScore(false);
    let old = [...card];
    setCard(
      old.map((card) => {
        card.clicked = false;
        return card;
      })
    );
  };

  const handleScore = (change) => {
    if (change === false) {
      if (maxScoreRef.current < scoreRef.current) {
        updateScore(scoreRef.current);
      }
      resetScore();
    } else if (change === true) {
      addScore();
    }
  };

  const addScore = () => {
    setScore((score) => score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const updateScore = (score) => {
    setMaxScore(score);
  };

  return (
    <div>
      <div>Score: {score}</div>
      <div>Max Score: {maxScore}</div>
      <ul>
        {card.map((card) => (
          <li key={card.id} data-id={card.name} data-clicked={card.clicked}>
            {card.name} {card.clicked.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
