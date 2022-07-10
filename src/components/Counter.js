import React from "react";
import "../styles/Counter.css";

export const Counter = ({ Characters }) => {
  return (
    <>
      <div className="counter">
        {Characters.length > 0 ? (
          <span className="alert alert-info">
            {Characters.length} Results found
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
