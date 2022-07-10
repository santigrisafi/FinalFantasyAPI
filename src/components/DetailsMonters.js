import React from "react";

export const DetailsMonters = ({ object }) => {
  return (
    <>
      <p>HP: {object?.hp}</p>
      <p>Name: {object?.mana}</p>
      <p>Defense: {object?.defense}</p>
      <p>JapaneseName: {object?.japaneseName}</p>
      <p>Attack: {object?.attack}</p>
      <p>Game: {object?.game}</p>
    </>
  );
};
