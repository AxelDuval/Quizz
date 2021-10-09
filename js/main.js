// *** Global variables ***

const form = document.querySelector(".form-quizz");
let arrayResults = [];
const solutions = ["c", "a", "b", "a", "c"];
const emojis = ['✔️','✨','👀','😭','👎'];
const titleResult = document.querySelector(".resultats h2");
const textResult = document.querySelector(".note");
const helpResult = document.querySelector(".aide");
const allQuestions = document.querySelectorAll(".question-block");
let checkArray = [];

// *** Functions ***

// Check the user choice with the solutions array
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

// *** MAIN ***

form.addEventListener("submit", (e) => {
    // Prevent the form submit
    e.preventDefault();
    // console.log(document.querySelector("input[name='q1']:checked").value);
    
    // Take the value of the user choice and push it in an array
    for(i=1; i<6; i++) {
        arrayResults.push(document.querySelector(`input[name='q${i}']:checked`).value);
    }
    console.log(arrayResults);
    checkFunction(arrayResults);
    arrayResults = [];
})

