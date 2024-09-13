import { useState, useEffect } from "react";
import Confetti from "react-confetti";

import "./GuessMyNumber.css";
function GuessMyNumber() {
  const [secretNumber, setSecretNumber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("🤔 Start guessing...");

  const [isCelebrating, setIsCelebrating] = useState(false);

  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore) {
      setHighScore(Number(storedHighScore));
    }
  }, []);

  const handleCheck = () => {
    const guessedNumber = Number(guess);

    if (!guessedNumber) {
      setMessage("Enter a Input");
    } else if (guessedNumber === secretNumber) {
      if (score > highScore && highScore === 0) {
        setHighScore(score);
        localStorage.setItem("highScore", score);
        setMessage("😀 Yayy!!!.....Correct Answer,you have set a highscore");
        // setIsCelebrating(true);
      } else if (score > highScore && highScore !== 0) {
        setHighScore(score);
        localStorage.setItem("highScore", score);
        setMessage("😀 Yayy!!!.....Correct Answer,you have beat the highscore");
        
      }

      document.body.style.backgroundColor = "#22c55e";
    } else if (guessedNumber !== secretNumber) {
      if (score > 1) {
        setMessage(
          guessedNumber > secretNumber
            ? "📈 😄 Guess is too High"
            : "📉 😄 Guess is too low"
        );

        setScore(score - 1);
        setGuess("");
      } else {
        setMessage("😭 You Loose!!");
        setScore(0);

        document.body.style.backgroundColor = "#ef4444";
      }
    }
  };
  const handlePlayAgain = () => {
    setSecretNumber(Math.trunc(Math.random() * 20) + 1);
    setGuess("");
    setScore(20);
    setMessage("🤔 Start guessing...");
    setIsCelebrating(false);
    // localStorage.removeItem("highScore");
    // setHighScore(0);
    document.body.style.backgroundColor = "#222";
  };

  const handleReset = () => {
    setSecretNumber(Math.trunc(Math.random() * 20) + 1);
    setGuess("");
    setScore(20);
    setMessage("🤔 Start guessing...");
    setIsCelebrating(false);
    localStorage.removeItem("highScore");
    setHighScore(0);
    document.body.style.backgroundColor = "#222";
  };

  return (
    <div>
      {isCelebrating && <Confetti />}
      <header>
        <div className="btn-between">
          <button className="btn again" onClick={handlePlayAgain}>
            Play Again
          </button>
          <button className="btn again" onClick={handleReset}>
            Reset Game
          </button>
          <p className="between">(Between 1 and 20)</p>
        </div>
        <h1>Guess My Number</h1>
        <div className="number">
          {/* {score === 0 || message.includes("Correct") ? secretNumber : "?"} */}
          {secretNumber}
        </div>
      </header>

      <main>
        <section className="left">
          <input
            type="number"
            className="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>

        <section className="right">
          <p className="message">{message}</p>
          <p className="label-score">
            Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            High Score: <span className="high-score">{highScore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default GuessMyNumber;
