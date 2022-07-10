import React from "react";
import "./../styles/CardsData.css";
import { DetailsCharacter } from "./DetailsCharacter";
import { DetailsMonters } from "./DetailsMonters";

const CardsData = ({ data, filter }) => {
  return (
    <div className="container main-container square-card border border-radius bg-white">
      <div className="row bg-white ">
        <h4 className="mt-3">
          <b>{data.name}</b>
        </h4>
        <div className="col">
          <img src={data.picture} className="rounded-circle" />
        </div>
        {filter === "characters" ? (
          <DetailsCharacter object={data} />
        ) : (
          <DetailsMonters object={data} />
        )}
        <div className="bg-white">
          <h5 className="text-dark">
            <b>Description</b>
          </h5>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export { CardsData };
