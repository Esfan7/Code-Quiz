let time = 75
window.onload = function () {
    document.getElementById('time').innerHTML
    let text = document.getElementById('time').innerHTML
    document.getElementById('time').innerHTML = text + " " + time
}
let q1Answers =
    [
        {
            ansrs: ["Q1"],
        }
    ]
let q2Answers =
    [
        {
            ansrs: ["Q2"],
        }
    ]
let q3Answers =
    [
        {
            ansrs: ["Q3"],
        }
    ]
let q4Answers =
    [
        {
            ansrs: ["Q4"],
        }
    ]
let questions = []
questions.push("Commonly used data types DO NOT include:")
questions.push("The condition in an if / else statement is enclosed within ____.")
questions.push("Arrays in JavaScript can be used to store ____.")
questions.push("String values must be enclosed within ____ when being assigned to variables.")
function LoadQuestions() {
    let index = Math.floor(Math.random() * (questions.length))
    console.log(index)
    let question = questions[index]
    console.log(question)
    return index
}
let idx =LoadQuestions()
function loadAnswers(i) {
    // <p id="QuestionText">
    //     </p>
    //     <ul id="Answers">
    //     </ul>
    let questText = document.getElementById("QuestionText");
    questText
    switch (i) {
        case 0:
            console.log(q1Answers[0].ansrs)
            break;
        case 1:
            console.log(q2Answers[0].ansrs)
            break;
        case 2:
            console.log(q3Answers[0].ansrs)
            break;
        case 3:
            console.log(q4Answers[0].ansrs)
            break;
    }
}
loadAnswers(idx)