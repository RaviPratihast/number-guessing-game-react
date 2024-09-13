import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import Button from "../Component/Button/Button";
import "./GuessMyNumber.css";

function GuessMyNumber() {
  const { stateAuth } = useAuth();
  const navigate = useNavigate();
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
    if (stateAuth.loggedIn) {
      const guessedNumber = Number(guess);

      if (!guessedNumber) {
        setMessage("Enter a valid number!");
      } else if (guessedNumber === secretNumber) {
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem("highScore", score);
          setMessage("😀 Yayy!!! Correct Answer! You've set a new high score!");
        } else {
          setMessage("😀 Yayy!!! Correct Answer!");
          if (score > highScore) {
            setIsCelebrating(true);
          }
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
          setMessage("😭 You Lose!!");
          setScore(0);
          document.body.style.backgroundColor = "#ef4444";
        }
      }
    } else {
      navigate("/login");
    }
  };

  const handlePlayAgain = () => {
    setSecretNumber(Math.trunc(Math.random() * 20) + 1);
    setGuess("");
    setScore(20);
    setMessage("🤔 Start guessing...");
    setIsCelebrating(false);
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
          <div>
            <Button className="again" onClick={handlePlayAgain}>
              Play Again
            </Button>
            <Button className="again" onClick={handleReset}>
              Reset Game
            </Button>
          </div>
          <p className="between">(Between 1 and 20)</p>
        </div>
        <h1>Guess My Number</h1>
        <div className="number">
          {score === 0 || message.includes("Correct") ? secretNumber : "?"}
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
          <Button className="check" onClick={handleCheck}>
            Check!
          </Button>
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
