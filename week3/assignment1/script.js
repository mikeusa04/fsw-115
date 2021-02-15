/*The following exercise should be completed in vanilla JavaScript. Use https://api.vschool.io/pokemon (Links to an external site.) as your url for your XHR request to get the big list of Pokemon. It will be easiest to do this in steps:
Step 1 - get the data
Step 2 - display the data
Step 1
Write a function that gets the JSON and parses the JSON to create an array of objects that look like this:
{
  name: 'Charmander',
  resource_uri: 'api/v1/pokemon/8/'
},
{(Another pokemon object)},
{(Another pokemon object)},
{(Another pokemon object)},
...
etc.
You can see this using the console or the sources tab in the Chrome Developer Tools.
Step 2
Make each Pokemon's name show up on a separate line in an HTML document. You will be using a for loop to iterate through each Pokemon object, and some DOM manipulation to add nodes for each Pokemon.
Extra Credit
Display details about each Pokemon.
Hints
You'll need to manually create an XML HTTP Request (Links to an external site.) and handle the readyState with onReadyStateChange.
You'll need to use the built-in JavaScript JSON object to change the JSON into a useable JavaScript object. Check out the W3Schools JSON Howto (Links to an external site.) for more information and examples.
The data that comes from the url endpoint above is complex. Notice that the "objects" property is an array, so you'll need to index into its 1st item in order to get any of the Pokemon names (data.objects[0]...);*/






const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0].pokemon)
        console.log(data)  // open ur console u will see the objects inside of it the 0 iside of it the pokemon
    } 
}


function showData(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name +" - "+ arr[i].resource_uri
        document.body.appendChild(h1)
    }
}


/* we can also add a button to the html <button onclick="getData()">Click me</button> and then we wrape the 
whole thing above inside that function of click so when we click the button the whole function excuted.

function getData(){
    const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0].pokemon)
        console.log(data)  // open ur console u will see the objects inside of it the 0 iside of it the pokemon
    } 
}
}*/