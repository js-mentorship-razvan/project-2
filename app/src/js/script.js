const movieTitle = document.getElementById("movieTitle");
const movieDescription = document.getElementById("movieDescription");
const genres = document.getElementById("checkbox");
const submit = document.getElementById("submit");
const movieRating = document.getElementById("movieRating");
const published = document.getElementById("published");
const output = document.getElementById("output");



submit.onclick = function() {
    let arr = [];
    const obj = {
        title : movieTitle,
        description : movieDescription,
        // genres : checkbox, <- aici imi da o eroare in consola.
        movieRating : movieRating,
        published : published
    };

    if (movieTitle.value && movieDescription.value) {
        localStorage.setItem(movieTitle.value, JSON.stringify(obj));
        location.reload();
    } else if (action.checked) {
        arr.push("Action");
    } else if (adventure.checked) {
        arr.push("Adventure");
    } else if (comedy.checked) {
        arr.push("Comedy");
    } else if (crime.checked) {
        arr.push("Crime");
    } else if (drama.checked) {
        arr.push("Drama");
    } else if (fantasy.checked) {
        arr.push("Fantasy");
    } else if (historical.checked) {
        arr.push("Historical");
    } else if (historicalFiction.checked) {
        arr.push("Historical Fiction");
    } else if (horror.checked) {
        arr.push("Horror");
    } else if (magicRealism.checked) {
        arr.push("Magic Realism");
    } else if (mystery.checked) {
        arr.push("Mystery");
    } else if (paranoidFiction.checked) {
        arr.push("Paranoid Fiction");
    } else if (philosophical.checked) {
        arr.push("Philosophical");
    } else if (political.checked) {
        arr.push("Political");
    } else if (romance.checked) {
        arr.push("Romance");
    } else if (saga.checked) {
        arr.push("Saga");
    } else if (satire.checked) {
        arr.push("Satire");
    } else if (scienceFiction.checked) {
        arr.push("Science Fiction");
    } else if (social.checked) {
        arr.push("Social");
    } else if (speculative.checked) {
        arr.push("Speculative");
    } else if (thriller.checked) {
        arr.push("Thriller");
    } else if (urban.checked) {
        arr.push("Urban");
    } else if (western.checked) {
        arr.push("Western");
    }
    
    
    // console.log(localStorage);

};

     for (let i = 0; i < localStorage.length; i += 1) {
     const key = localStorage.key(i);
     const value = localStorage.getItem(key);

    JSON.parse(localStorage.getItem('obj')).genres; 

     output.innerHTML += `${key}: ${value}<br />`;
}


// localStorage.setItem("obj" , JSON.stringify(obj));
// const toJSON = JSON.parse(localStorage.getItem("obj"));
// console.log(toJSON);



// localStorage.setItem("obj", JSON.stringify({hi : "there"}));
// console.log(JSON.parse(localStorage.getItem("obj")));


// definesti un array gol unde stochezi toate stringurile genres pentru un film (verifici cu checked fiecare id si il adaugi in array)
// pregatesti obiectiul cu title, short description, genres, rating, release date
// adaugi in localstorage un key si obiectul cu json stringify
// in for loop parsezi propietatile din obiectul tau cu JSON.parse(localStorage.getItem('obj')).numeleProprietatiiTale