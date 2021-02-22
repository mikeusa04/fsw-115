// PUT request with axios

const updates = {
    title: "My Second Todo",
    description: "This is my second todo"
}

axios.put("https://api.vschool.io/scrimbalessons/todo/5d8bd531ee91575e6d49e06f", updates)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))




// GET 
// axios.get("https://api.vschool.io/scrimbalessons/todo")
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))