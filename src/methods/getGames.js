
let getGames = async() =>{
    let urlAPI = await fetch("https://www.moogleapi.com/api/v1/games");
    let dataAPI = await urlAPI.json();
    let dataGames = dataAPI.map((game)=>{
        return({
            id: game.gameId,
            title: game.title,
            platform: game.platform,
            releaseDate: game.releaseDate,
            description: game.description,
            picture: game.picture,
        })
    })
    return dataGames;
}

export {getGames};