// DELETE request with axios

 axios.delete("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
     .then(response => console.log(response.data))
    .catch(error => console.log(error))









// GET one
// axios.get("https://api.vschool.io/scrimbalessons/todo")
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))