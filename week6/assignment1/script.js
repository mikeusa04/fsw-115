const getData = async () => {
    const baseData = await axios.get("https://rickandmortyapi.com/api") //to go to main data
    .then(res => res)
    .catch(err => err)
    console.log(baseData)

    const charactersData = await axios.get(baseData.data.characters) //to go inside the characters URL
    .then(res => res)
    .catch(err => err)
    console.log(charactersData)

    const episodesData = await axios.get(baseData.data.episodes) //to go inside the episodes URL
    .then(res => res)
    .catch(err => err)
    console.log(episodesData)

    const locationsData = await axios.get(baseData.data.locations) //to go inside the locations URL
    .then(res => res)
    .catch(err => err)
    console.log(locationsData)

    listDataToDOM(charactersData, episodesData, locationsData) //to call the function listDataToDOM () bellow
}
getData()



//to print what we need on the page, we do it here then we call it above inside the getData function
function listDataToDOM(charactersData, episodesData, locationsData){
    
    // this is to print all the names with for loop
    for(let i = 0; i < charactersData.data.results.length; i++){
    const h1 = document.createElement('h1')
    h1.textContent = "Name of The Character: " + charactersData.data.results[i].name
    document.body.appendChild(h1)
    }

    // this to print only the first name we could print them all using for loop like above
    const nameh1 = document.createElement('h1')
    nameh1.textContent = "Name of The Episode: " + episodesData.data.results[0].name
    document.body.appendChild(nameh1)

    // this is to print only the first name
    const nameh2 = document.createElement('h1')
    nameh2.textContent = "Name of The Location: " + locationsData.data.results[0].name
    document.body.appendChild(nameh2)
}