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

  useEffect(() => {
    const handleClick = () => {
      let old = [...card];
      setCard(old.sort(()=> 0.5 - Math.random()));
      console.log(old);
      handleScore();
    };
    document.addEventListener("click", handleClick);
    return () => {
  document.removeEventListener("click", handleClick);
};
},[card]);


  const handleScore = () => {
console.log('hi');
  };

  return (
    <div>
    <Card/>
    <ul>
     {card.map((card) => (
       <li key={card.id}>{card.name}</li>
     ))}
   </ul>
    </div>
  );
}

export default App;
