const inpTitle = document.getElementById("inpTitle");
const inpShortDescription = document.getElementById("inpShortDescription");
const inpSubmit = document.getElementById("inpSubmit");
const lsOutput = document.getElementById("lsOutput");

inpSubmit.onclick = function() {
    const title = inpTitle.value;
    const shortDescription = inpShortDescription.value;

    if (title && shortDescription) {
        localStorage.setItem(title, shortDescription);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `${key}: ${value}<br />`;
}