
let getCharactersByJob = async (job) =>{
    let urlAPI = await fetch(`https://www.moogleapi.com/api/v1/characters?job=${job}`);
    let dataAPI = await urlAPI.json();
    let charactersAPI = dataAPI.map((character)=>{
        return ({
            id: character.id,
            name: character.name,
            age: character.age,
            job: character.job,
            japaneseName: character.japaneseName,
            origin: character.origin,
            description: character.description,
            race: character.race,
            picture: character.pictures[0]?.url,
        })
    })
    return charactersAPI;
}

export {getCharactersByJob};