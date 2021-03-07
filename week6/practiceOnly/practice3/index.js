// Promise.all()
// url: https://swapi.co/api/people/1

async function getAllLukeMovies(){
    const lukeData = await axios.get("https://swapi.co/api/people/1")
    const lukeFilmUrls = lukeData.data.films
    const pendingPromises = []
    
    for(let i = 0; i < lukeFilmUrls.length; i++){
        pendingPromises.push(axios.get(lukeFilmUrls[i]))
    }
    
    Promise.all(pendingPromises)
        .then(response => console.log(response[2].data.title))
        .catch(error => console.log(error))
}

getAllLukeMovies()