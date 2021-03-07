// Async - Await

// url: https://swapi.co/api/people/1


async function getData(){
    
    try {
        const response = await axios.get("https://swapi.co/api/people/1") 
        const homeworld = await axios.get(response.data.homeworld)
        listHomeWorldToDOM(homeworld, response)
    }
    catch(error){
        console.log(error)
    }
    
    
}


getData()

function listHomeWorldToDOM(homeworld, luke){
    const h1 = document.createElement('h1')
    h1.textContent = homeworld.data.name
    document.body.appendChild(h1)
    
    const nameh1 = document.createElement('h1')
    nameh1.textContent = luke.data.name
    document.body.appendChild(nameh1)
}

// this what we have done in promise chaining but it's easier and cleaner to do it with async above
//   axios.get("https://swapi.co/api/people/1")
//  .then(response => {
//             const homeworldURL = response.data.homeworld
//             return axios.get(homeworldURL)
//         })
//         .then(response => {
//             console.log(response)
//         })
//         .catch(error => console.log(error))