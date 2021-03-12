//list1
axios.get("https://api.vschool.io/mikesaleh1/todo")
    //.then(response => console.log(response)) this is to show u everything in the console, we could do 
    //.catch(error => console.log(error))      (response.data) to show the array of data without everything else 

    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = "Title: " + response.data[i].title +" - Description: " + response.data[i].description +" - Price: " + response.data[i].price
            document.body.appendChild(h1)
            if(response.data[i].completed === true){
                h1.style.textDecoration = "line-through"
            }

            h1.addEventListener("click", function(e){
                e.preventDefault()
                //if(response.data[i].completed === true){
                //    h1.style.textDecoration = "line-through"
                //}
                axios.put(`https://api.vschool.io/mikesaleh1/todo/${response.data[i]._id}`, {completed: !response.data[i].completed})
                  .then(res => console.log(res))
                  .catch(err => console.log(err))
            })

            //to load the image along with the h1
            let todoImage = document.createElement("img")
            todoImage.src = response.data[i].imgUrl
            document.body.appendChild(todoImage)

            //to load the image once you click the button
            const loadButton = document.getElementById("button")
            loadButton.addEventListener("click", loadImg)
            

            // delete button
            const deleteButton = document.createElement("button")
            deleteButton.innerText = "Delete"
            // deleteButton.addEventListener("click", deleteTodo)
            deleteButton.addEventListener("click", function(e){
                e.preventDefault()
                axios.delete(`https://api.vschool.io/mikesaleh1/todo/${response.data[i]._id}`)
                  .then(res => console.log(res))
                  .catch(err => console.log(err))
            })
            document.body.appendChild(deleteButton)
        }
    })
    .catch(error => console.log(error))

    
    //function to load the iamge on click the button
    const loadImg = (e) => {
        e.preventDefault()
        axios.get("https://api.vschool.io/mikesaleh1/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            let todoImage = document.createElement("img")
        todoImage.src = response.data[i].imgUrl
        document.body.appendChild(todoImage)
        }
    })
    .catch(error => console.log(error))
    }

    /* another way to create a delete button here
    const deleteTodo = () => {
        axios.delete(`https://api.vschool.io/mikesaleh1/todo/${response.data[i]._id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    and then put this 
    deleteButton.addEventListener("click", deleteTodo)
    in the delete button part above*/


    /* you can do post request like this or below
    const todoForm = document.todoform
        todoForm.addEventListener("submit", function(event){
        event.preventDefault()
        
        const newTodo = {
            title: todoForm.title.value,
            description: todoForm.description.value,
            price: todoForm.price.value
        }
        todoForm.title.value = ""
        
        axios.post("https://api.vschool.io/mikesaleh1/todo", newTodo)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    })*/


    // post request
     const postToDo = (e) => {
         e.preventDefault()
         let todoTitle = document.getElementById("todoTitle").value
         let todoDescription = document.getElementById("todoDescription").value
         let todoPrice = document.getElementById("todoPrice").value
         let todoCompleted = document.getElementById("todoCompleted").checked

         let newTodo = {
             title: todoTitle,
             description: todoDescription,
             price: todoPrice,
             completed: todoCompleted
         }

         axios.post("https://api.vschool.io/mikesaleh1/todo", newTodo)
            .then(response => {
                console.log(response.data)
                location.reload() // this is to load the new todo on the page without refreshing the page
            })
            .catch(error => console.log(error))
    }

    let form = document.getElementById("todoForm")
    form.addEventListener("submit", postToDo)
    


// multi post requests
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