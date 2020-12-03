const submit = document.getElementById("form");
const inputGenre = document.getElementById("genre");
const inputAge = document.getElementById("age");
const result = document.getElementById("result");

// e=>{} = function(event){}
submit.addEventListener("submit", e => {
    e.preventDefault();
    let genre = inputGenre.value;
    let age = Number(inputAge.value);

    if ((genre === "HOMME" && age >= 20) || (genre === "FEMME" && age >= 18 && age <= 35)) {
        result.textContent = "Vous payez des impôts";
    } else if (genre === "NON-BINAIRE" && age >= 20) {
        result.textContent = "Tu n'y echapperas pas !";
    } else {
        result.textContent = "Quelle chance !";
    }
})