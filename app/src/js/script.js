// let selectedRow = null;


const movieTitle = document.getElementById("movieTitle");
const movieDescription = document.getElementById("movieDescription");
const genres = document.getElementById("checkbox");
const submit = document.getElementById("submit");
const movieRating = document.getElementById("movieRating");
const published = document.getElementById("published");
const output = document.getElementById("output");



submit.onclick = function() {
    let arr = [];

    if (action.checked) {
        arr.push("Action");
    } 
    if (adventure.checked) {
        arr.push("Adventure");
    }
    if (comedy.checked) {
        arr.push("Comedy");
    } 
    if (crime.checked) {
        arr.push("Crime");
    }
    if (drama.checked) {
        arr.push("Drama");
    }
    if (fantasy.checked) {
        arr.push("Fantasy");
    }
    if (historical.checked) {
        arr.push("Historical");
    }
    if (historicalFiction.checked) {
        arr.push("Historical Fiction");
    }
    if (horror.checked) {
        arr.push("Horror");
    }
    if (magicRealism.checked) {
        arr.push("Magic Realism");
    }
    if (mystery.checked) {
        arr.push("Mystery");
    }
    if (paranoidFiction.checked) {
        arr.push("Paranoid Fiction");
    }
    if (philosophical.checked) {
        arr.push("Philosophical");
    }
    if (political.checked) {
        arr.push("Political");
    }
    if (romance.checked) {
        arr.push("Romance");
    }
    if (saga.checked) {
        arr.push("Saga");
    }
    if (satire.checked) {
        arr.push("Satire");
    }
    if (scienceFiction.checked) {
        arr.push("Science Fiction");
    }
    if (social.checked) {
        arr.push("Social");
    }
    if (speculative.checked) {
        arr.push("Speculative");
    }
    if (thriller.checked) {
        arr.push("Thriller");
    }
    if (urban.checked) {
        arr.push("Urban");
    }
    if (western.checked) {
        arr.push("Western");
    }




    const obj = {
        title : movieTitle.value,
        description : movieDescription.value,
        genres : arr,
        movieRating : movieRating.value,
        published : published.value
    };

    if (movieTitle.value && movieDescription.value) {
        localStorage.setItem(movieTitle.value, JSON.stringify(obj));
        location.reload();
    } 
    
    

};

     for (let i = 0; i < localStorage.length; i += 1) {
     const key = localStorage.key(i);
     const value = localStorage.getItem(key);

     output.innerHTML += ` <li> ${key}: <b>description:</b> ${JSON.parse(value).description} ${JSON.parse(value).genres} ${JSON.parse(value).movieRating} ${JSON.parse(value).published}<br /><button onclick="Delete(this);">Delete</button> </li>`;
    }

    function Delete(currentEl){
       currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
       }


    // function edit(td) {
    //     selectedRow = td.parentElement.parentElement;
    //     document.getElementById("movieTitle").value = selectedRow.cells[0].innerHTML;
    //     document.getElementById("movieDescription").value = selectedRow.cells[1].innerHTML;
    //     document.getElementById("genres").value = selectedRow.cells[2].innerHTML;
    //     document.getElementById("rating").value = selectedRow.cells[3].innerHTML;
    //     document.getElementById("published").value = selectedRow.cells[4].innerHTML;
    // }   

    // function updateRecord(obj) {
    //     selectedRow.cells[0].innerHTML = obj.title;
    //     selectedRow.cells[1].innerHTML = obj.description;
    //     selectedRow.cells[2].innerHTML = obj.genres;
    //     selectedRow.cells[3].innerHTML = obj.movieRating;
    //     selectedRow.cells[4].innerHTML = obj.published;
    // }
