import { Routes, Route } from "react-router-dom";
import GuessMyNumber from "./GuessMyNumber/GuessMyNumber";
import Login from "./LoginPage/Login";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuessMyNumber />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
