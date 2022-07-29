import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [userChoice, setUserChoice] = useState('rock');
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResults, setTurnResults] = useState(null);
  const [results, setResults] = useState('Let\'s see who wins');
  const [gameOver, setGameOver] = useState(false);

  const choices = ['rock','paper','scissors'];

  const handleonClick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice()
  }
  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice)
  }

const reset = () => {
  window.location.reload();
}

useEffect(() => {
  const comboMoves = userChoice + computerChoice;
  if(userPoints <=4 && computerPoints <=4) {
    if(comboMoves === "rockscissors" ||comboMoves === "paperrock" ||comboMoves === "scissorspaper"){
      const updatedUserPoints = userPoints + 1;
      setUserPoints(updatedUserPoints);
      setTurnResults("User got the point")
      if(userPoints === 5) {
        setGameOver(true);
        setResults("User Wins")
      }
    }
    if(comboMoves === "paperscissors" ||comboMoves === "scissorsrock" ||comboMoves === "rockpaper") {
      const updatedComputerPoints = computerPoints + 1;
      setComputerPoints(updatedComputerPoints);
      setTurnResults("Computer got the point");
      if (computerPoints === 5) {
        setGameOver(true);
        setResults("Computer Wins");
      }
    }
    
    if (
      comboMoves === "paperpaper" ||
      comboMoves === "scissorsscissors" ||
      comboMoves === "rockrock"
    ) {
      setTurnResults("No one got the point");
      if (userPoints === 5) {
        setGameOver(true);
        setResults("User Wins");
      }
      if (computerPoints === 5) {
        setGameOver(true);
        setResults("Computer Wins");
      }
    }
  }
  if (userPoints === 5) {
  setGameOver(true);
  setResults("User wins")
  }

  if (computerPoints === 5) {
    setGameOver(true);
    setResults("Computer wins");
  }
}, [userChoice, computerChoice])

  return (
    <div className="App">
      <h1 className="heading">Rock Paper Scissors</h1>
      <div className="score">
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>
      <div className="choices">
        <div className="choice-user">
          <img
            src={`../images/${userChoice}.png`}
            alt=""
            className="user-hand"
          />
        </div>
        <div className="choice-computer">
          <img
            src={`../images/${computerChoice}.png`}
            alt=""
            className="computer-hand"
          />
        </div>
      </div>

      {!gameOver && (
        <div className="button-div">
          {choices.map((ch, index) => (
            <button
              className="button"
              key={index}
              onClick={() => handleonClick(ch)}
            >
              {ch}
            </button>
          ))}
        </div>
      )}

      <div className="result">
        <h1>Turn Result: {turnResults}</h1>
        <h1>Final Result: {results}</h1>
      </div>

      {gameOver && (
        <div className="button-div">
          <button onClick={() => reset()}>Restart Game</button>
        </div>
      )}
    </div>
  );
}

export default App;
