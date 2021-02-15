axios.get("https://api.vschool.io/mikesaleh1/todo")
    //.then(response => console.log(response)) this is to show u everything in the console, we could do 
    //.catch(error => console.log(error))      (response.data) to show the array of data without everything else 

    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = "Title: " + response.data[i].title +" - Description: " + response.data[i].description +" - Price: " + response.data[i].price
            document.body.appendChild(h1)
            h1.addEventListener("click", function(e){
                e.preventDefault()
                if(response.data[i].completed === false){
                    h1.style.textDecoration = "line-through"
                }
            })
        }
    })
    .catch(error => console.log(error))
