/*This website needs to have at least 2 pages, where each page presents a button
When the button is clicked, an axios.get request will go to an API of the students choosing and have the response data show up as a list on the HTML page.
Must be fully styled - responsive
2 APIs must be used, (one for each page)*/

//list1
const getMikeData = () => {
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
                if(response.data[i].completed === true){
                    h1.style.textDecoration = "line-through"
                }
            })
        }
    })
    .catch(error => console.log(error))
}

/* Note: this function      const getMikeData = () => {.....} is same as
                            function getMikeData () {......}
*/
// list2
const getCatFacts = () => {
    axios.get("https://cat-fact.herokuapp.com/facts")
    .then (res => {
        renderCatFacts(res.data)
    })
    .catch(err => console.log(err))
}

const renderCatFacts = (data) => {
    console.log(data)
    const ul = document.getElementById("ul")
    for(let i = 0; i < data.length; i++){
        console.log(data[i].text)
        let li = document.createElement("li")
        li.textContent = data[i].text
        ul.appendChild(li)
    }
}