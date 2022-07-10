let params = {
  url: "https://www.moogleapi.com/api/v1",
};

let getMonstersByTerm = async (term) => {
  let urlAPI = await fetch(`${params.url}/monsters/search?name=${term}`);
  let dataAPI = await urlAPI.json();
  return dataAPI.map((data) => {
    return {
      id: data?.monsterId,
      name: data?.name,
      japaneseName: data?.japaneseName,
      picture: data?.picture,
      description: data?.description,
      game: data?.game,
      hp: data?.hitPoints,
      mana: data?.manaPoints,
      defense: data?.defense,
      attack: data?.attack,
    };
  });
};

export { getMonstersByTerm };
