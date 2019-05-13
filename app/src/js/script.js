const movieTitle = document.getElementById("movieTitle");
const movieDescription = document.getElementById("movieDescription");
const submit = document.getElementById("submit");
const movieRating = document.getElementById("movieRating");
const checkBoxes = document.getElementById("checkBoxes");
const published = document.getElementById("published");
const output = document.getElementById("output");
localStorage.setItem("obj" , JSON.stringify(obj));
const toJSON = JSON.parse(localStorage.getItem("obj"));

submit.onclick = function() {
    const key = movieTitle.value;
    const value = movieDescription.value;

    if (key && value) {
        localStorage.setItem(movieTitle.value, movieDescription.value, "obj" , JSON.stringify(obj));
        location.reload();
    }
    console.log(localStorage);
};

    for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `${key}: ${value}<br />`;
}

const obj = {
    genres : checkBoxes,
    movieRating : movieRating,
    published : published
};

// localStorage.setItem("obj" , JSON.stringify(obj));
// const toJSON = JSON.parse(localStorage.getItem("obj"));
// console.log(toJSON);



// localStorage.setItem("obj", JSON.stringify({hi : "there"}));
// console.log(JSON.parse(localStorage.getItem("obj")));
