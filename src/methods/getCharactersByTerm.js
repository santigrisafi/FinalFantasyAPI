let params = {
  url: "https://www.moogleapi.com/api/v1",
};

let getCharactersByTerm = async (term) => {
  let urlAPI = await fetch(`${params.url}/characters/search?name=${term}`);
  let dataAPI = await urlAPI.json();
  return dataAPI.map((data) => {
    return {
      id: data?.id,
      description: data?.description,
      gender: data?.gender,
      name: data?.name,
      age: data?.age,
      height: data?.height,
      job: data?.job,
      origin: data?.origin,
      race: data?.race,
      japaneseName: data?.japaneseName,
      picture: data.pictures[0]?.url,
    };
  });
};

export { getCharactersByTerm };
