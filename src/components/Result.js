import { React } from "react";
import { CardsData } from "./CardsData";
import "../styles/Result.css";


let Result = ({ data, filter }) => {
  return (
    <>
      <div className="result">
        <CardsData data={data} filter={filter}></CardsData>
      </div>
    </>
  );
};

export { Result };
