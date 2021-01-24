/*Copy the response from an api in postman and paste it into a JS file.
Make the data show up on the webpage.*/


// we going to assigne the object we got from the api to the var data
var data = {
    "name": "Alderaan",
    "rotation_period": "24",
    "orbital_period": "364",
    "diameter": "12500",
    "climate": "temperate",
    "gravity": "1 standard",
    "terrain": "grasslands, mountains",
    "surface_water": "40",
    "population": "2000000000",
    "residents": [
        "http://swapi.dev/api/people/5/",
        "http://swapi.dev/api/people/68/",
        "http://swapi.dev/api/people/81/"
    ],
    "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/6/"
    ],
    "created": "2014-12-10T11:35:48.479000Z",
    "edited": "2014-12-20T20:58:18.420000Z",
    "url": "http://swapi.dev/api/planets/2/"
};
// now we are going to show it up on the html page 
var output = document.getElementById("output");
var list = document.createElement("li");
list.innerHTML = "name: "+ data.name 
output.append(list)

var output = document.getElementById("output");
var list = document.createElement("li");
list.innerHTML = "rotation_period: "+ data.rotation_period
output.append(list)

var output = document.getElementById("output");
var list = document.createElement("li");
list.innerHTML = "orbital_period: "+ data.orbital_period
output.append(list)
// and you keep going to print them all on the html page

// now we'r going to go through the array (residents) and show it up on html page
// to get the array inside the object 
var output = document.getElementById("output") 
let array = data.residents;
for(let i=0; i < array.length; i++) {
var list = document.createElement("li");
list.innerHTML = array[i]
output.append(list)
}



// another way to do that array
/*var output = document.getElementById("output") 
let array = data.residents;
//output.innerHTML += array
for(let i=0; i < array.length; i++ ) {
    // to show whats inside that array in the console do
    //console.log(array[i])
    output.innerHTML += "<li>" + array[i] + "</li>" 
}*/



//to get only the first item in the array and put it in th html page
/*var output = document.getElementById("output") 
let array = data.residents;
list.innerHTML = array[0]
output.append(list)*/



/*this is advanced how to go through the object
const obj = { a: 1, b: 2 };
Object.keys(obj).forEach(key => {
    //console.log("key: ", key);
    output.innerHTML = key
  	console.log("Value: ", obj[key]);
} );*/
