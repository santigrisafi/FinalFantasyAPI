import React from "react";

export const DetailsCharacter = ({ object }) => {
  return (
    <>
      <p>Gender: <b>{object?.gender}</b></p>
      <p>Age: <b>{object?.age}</b></p>
      <p>Race: <b>{object?.race}</b></p>
      <p>Height: <b>{object?.height}</b></p>
      <p>Origin: <b>{object?.origin}</b></p>
    </>
  );
};
