const form = document.querySelector(".form-quizz");
let arrayResults = [];
const solutions = ["c", "a", "b", "a", "c"];
const emojis = ['✔️','✨','👀','😭','👎'];
const titleResult = document.querySelector(".resultats h2");
const textResult = document.querySelector(".note");
const helpResult = document.querySelector(".aide");
const allQuestions = document.querySelectorAll(".question-block");
let checkArray = [];



form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(document.querySelector("input[name='q1']:checked").value);

    for(i=1; i<6; i++) {
        arrayResults.push(document.querySelector(`input[name='q${i}']:checked`).value);
    }
    console.log(arrayResults);
    checkFunction(arrayResults);
    arrayResults = [];
})

function checkFunction(arrayResults) {
    for(let a=0; a < 5; a++){
        if(arrayResults[a] === solutions[a]){
            checkArray.push(true);
        }
        else {
            checkArray.push(false);
        }
        console.log(checkArray);
    }
}