const form = document.querySelector(".form-quizz");
let arrayResults = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(document.querySelector("input[name='q1']:checked").value);
})