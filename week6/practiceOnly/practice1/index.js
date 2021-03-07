// Promise Chaining
// url: https://swapi.co/api/people/1

axios.get("https://swapi.co/api/people/1")
    .then(response => {
        const homeworldURL = response.data.homeworld
        return axios.get(homeworldURL)
    })
    .then(response => {
        return axios.get(response.data.residents[1])
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))