import React, {useState, useEffect} from "react";
import './App.css';
import Card from './components/Card'

const cardArray = [
  {
    id: 1,
    name: 1,
    image: "",
    clicked: false,
  },
  {
    id: 2,
    name: 2,
    image: "",
    clicked: false,
  },
  {
    id: 3,
    name: 3,
    image: "",
    clicked: false,
  },
  {
    id: 4,
    name: 4,
    image: "",
    clicked: false,
  },
  {
    id: 5,
    name: 5,
    image: "",
    clicked: false,
  },
  {
    id: 6,
    name: 6,
    image: "",
    clicked: false,
  },
  {
    id: 7,
    name: 7,
    image: "",
    clicked: false,
  },
  {
    id: 8,
    name: 8,
    image: "",
    clicked: false,
  },
  {
    id: 9,
    name: 9,
    image: "",
    clicked: false,
  },
  {
    id: 10,
    name: 10,
    image: "",
    clicked: false,
  },
  {
    id: 11,
    name: 11,
    image: "",
    clicked: false,
  },
  {
    id: 12,
    name: 12,
    image: "",
    clicked: false,
  },
  ]

const App = () => {
  const [card, setCard] = useState(cardArray);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);



  useEffect(() => {
    const handleClick = (e) => {
      let clickedCard = parseInt(e.target.dataset.id);
        if( card[clickedCard - 1].clicked === true) {
          gameReset();
        } else {
      let old = [...card];
      setCard(old.map((card) => {
        if (card.name === clickedCard) {
            card.clicked = true;
        }
        return card
      }))
      handleScore(true);
      setCard(old.sort(()=> 0.5 - Math.random()));
    };
  }
    document.addEventListener("click", handleClick);
    return () => {
    document.removeEventListener("click", handleClick);
    };

  },[]);

const gameReset=()=> {
  handleScore(false);
  let old = [...card];
  setCard(old.map((card) => {
    card.clicked = false;
    return card
  }))
}


  const handleScore = (change) => {
    if(change === false) {
      console.log(score);
      if (maxScore < score) {
        updateScore(score);
      }
      resetScore();
    } else if (change === true) {
      addScore();
    }
  };

const addScore = () => {
  setScore(score => score + 1);
}

const resetScore = () => {
  setScore(0);
}

const updateScore = () => {
  setMaxScore(score)
}

useEffect(() => {
  console.log(`count changed to ${score}`);
}, [score]);

  return (
    <div>
    <Card/>
    <div>Score: {score}</div>
    <div>Max Score: {maxScore}</div>
    <ul>
     {card.map((card) => (
       <li key={card.id} data-id={card.name} data-clicked={card.clicked}>{card.name} {card.clicked.toString()}</li>
     ))}
   </ul>
    </div>
  );
}

export default App;
