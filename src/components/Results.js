import { React } from "react";
import "../styles/Results.css";
import { Counter} from "./Counter";

let Results = (props) => {
  return (
    <>
      <div className="results">
        <Counter Characters={props.Data}></Counter>
        <ul>{props.children}</ul>
      </div>
    </>
  );
};

export { Results };
