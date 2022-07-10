import { React, useState } from "react";
import { Search } from "./Search";
import { getCharactersByTerm } from "./../methods/getCharactersByTerm";
import { Results } from "./Results";
import { Result } from "./Result";
import { getMonstersByTerm } from "../methods/getCharactersMonstersByTerm";

let Data = [{}];

let App = () => {
  let [term, setTerm] = useState("");
  let [filter, setFilter] = useState("");

  let searchThing = (filter) => {
    switch (filter) {
      case "characters":
        getCharactersByTerm(term).then((results) => (Data = results));
      case "monsters":
        getMonstersByTerm(term).then((results) => (Data = results));
    }
  };

  let showTerm = () => {
    return term.length <= 1 ? (Data = []) : searchThing(filter);
  };

  showTerm();

  return (
    <>
      <Search
        term={term}
        setTerm={setTerm}
        filter={filter}
        setFilter={setFilter}
      />
      {(
        <Results Data={Data}>
          {Data.map((result) => {
            return <Result key={result.id} data={result} filter={filter}></Result>;
          })}
        </Results>
      ) ?? "Cargando"}
    </>
  );
};

export default App;
