import { useState } from "react";
import "./App.css";

function GuessMyNumber() {
  const [secretNumber, setSecretNumber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("🤔 Start guessing...");
  return (
    <div>
      <header>
        <div className="btn-between">
          <button className="btn again">Play Again</button>
          <p className="between">(Between 1 and 20)</p>
        </div>
        <h1>Guess My Number</h1>
        <div className="number">?</div>
      </header>

      <main>
        <section className="left">
          <input type="number" className="guess" />
          <button className="btn check">Check!</button>
        </section>

        <section className="right">
          <p className="message">🤔 Start guessing...</p>
          <p className="label-score">
            Score: <span className="score">20</span>
          </p>
          <p className="label-highscore">
            High Score: <span className="high-score">0</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default GuessMyNumber;
