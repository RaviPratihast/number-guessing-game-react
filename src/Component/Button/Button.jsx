import { Children } from "react";
import "./Button.css";

const Button = ({ onClick, children, classname }) => {
  return (
    <button className={`btn ${classname}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
