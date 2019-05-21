const movieTitle = document.getElementById("movieTitle");
const movieDescription = document.getElementById("movieDescription");
const genres = document.getElementById("checkbox");
const submit = document.getElementById("submit");
const movieRating = document.getElementById("movieRating");
const published = document.getElementById("published");
const output = document.getElementById("output");



submit.onclick = function () {
    let arr = [];
    let options = document.querySelectorAll(".checkbox-selection");
    arr.push.apply(arr, [...options].reduce((prev, elem) => ((elem.checked && prev.push(elem.value)), prev), []));

    const obj = {
        title: movieTitle.value,
        description: movieDescription.value,
        genres: arr,
        movieRating: movieRating.value,
        published: published.value
    };

    if (movieTitle.value && movieDescription.value) {
        localStorage.setItem(movieTitle.value, JSON.stringify(obj));
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    output.innerHTML += ` <li> ${key}: <b>description:</b> ${JSON.parse(value).description} ${JSON.parse(value).genres} ${JSON.parse(value).movieRating} ${JSON.parse(value).published}<br /><button id="${key}" onclick="deleteMovie(this);">Delete</button> </li>`;
}

function deleteMovie(currentEl) {
    localStorage.removeItem(currentEl.getAttribute('id'));
    location.reload();
}

