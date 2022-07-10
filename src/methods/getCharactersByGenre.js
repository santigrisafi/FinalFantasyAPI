let params = {
  url: "https://www.moogleapi.com/api/v1/characters/",
};

let getCharactersByGender = async (gender) => {
  let urlAPI = await fetch(`${params.url}/search?gender=${gender}`);
  let dataAPI = await urlAPI.json();
  return dataAPI.map((character) => {
    return {
      id: character.id,
      description: character.description,
      gender: character.gender,
      name: character.name,
      age: character.age,
      height: character.height,
      job: character.job,
      origin: character.origin,
      race: character.race,
      japaneseName: character?.japaneseName,
      picture: character.pictures[0]?.url,
    };
  });
};

export { getCharactersByGender };
