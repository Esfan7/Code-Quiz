let time = 75
let questionIndex = 0;

window.onload = function () {
    document.getElementById('time').innerHTML
    let text = document.getElementById('time').innerHTML
    document.getElementById('time').innerHTML = text + " " + time
}

let myQuestions = [
    {
        q: "How many states are in America?",
        c: ["52","50","39","60"],
        a: "50"
    },
    {
        q: "How many planets are in the Solar System?",
        c: ["8","100","2","4"],
        a: "8"
    },
    {
        q: "Which blood type is universal?",
        c: ["B","O","AB","B+"],
        a: "O"
    },
    {
        q: "How many colors are on the rainbow?",
        c: ["7","12","1","9"],
        a: "7"  
    }


]

let questionIndexMax = myQuestions.length;
let messageElem = document.querySelector("#message");
let finishedElem =  document.querySelector("#finish");
let myTime;
let questionsElem = document.getElementById("questions");
let startBtn = document.querySelector("#startBtn");


function LoadQuestion(i) {
    let question = myQuestions[i]
    
    CreateQuestions(myQuestions[i])
}
function CreateQuestions(item)
{
    //item.q item.c item.a
    questionsElem.innerHTML= '';


    console.log("Questions: "+ item.q);

    //Create question
    let p = document.createElement("p");
    let text = document.createTextNode(item.q);
    p.appendChild(text);
    document.getElementById("questions").appendChild(p);


    //create choices
    for(let i = 0; i < item.c.length; i++)
    { 
        let p = document.createElement("p");
        let text = document.createTextNode(item.c[i]); 
        p.appendChild(text);
        p.classList.add("qBtn");
        p.addEventListener("click", function(e)
        {
            console.log("i am checking", e.target.textContent, item.a  )
           if(p.textContent == item.a)
           {
                //alert("Correct")
                messageElem.textContent = "Correct";
                setTimeout(()=>{
                    messageElem.textContent = "";
                }, 1000)
                questionIndex = questionIndex + 1;
                console.log("s",questionIndex, questionIndexMax);

                if(questionIndex == questionIndexMax ){
                    console.log("finished");
                    questionsElem.style.display = "none";
                    finishedElem.style.display = "flex";
                    clearInterval(myTime)

                } else {
                    LoadQuestion(questionIndex)
                }
              
           }
           else 
           {
                //alert("Incorrect")
                messageElem.textContent = "Incorrect";
                setTimeout(()=>{
                    messageElem.textContent = "";
                }, 1000)
                time-=10
                if(time < 0){
                    time = 0;
                }
                document.getElementById('time').innerHTML = "Time:" + " " + time
           }
           
          
        })  

        document.getElementById("questions").appendChild(p);
       
        console.log("Answer Choices: "+item.c[i]);
    }
}






startBtn.addEventListener("click", function(){
    LoadQuestion(0);
    questionsElem.style.display = "block";
    startBtn.style.display = "none";
    myTime = setInterval(() => {

        if(time <= 0){
            clearInterval(myTime);
            console.log("Game Over")
            time = 0;
        } else {
            time--
        }
      
        document.getElementById('time').innerHTML = "Time:" + " " + time
    }, 1000);
})








let allDoneBtn = document.querySelector("#finish button");
allDoneBtn.addEventListener("click", function(e){
    let inputValve =  document.querySelector("#finish input").value;
    console.log(inputValve)

      //check if exists
    let highScoreObj = []

    if (localStorage.getItem("highScore") === null) {
        highScoreObj.push( {
            name: inputValve,
            score: time
        });
    
    } else {
        let prevhighScorses = JSON.parse( localStorage.getItem("highScore") );
        highScoreObj = prevhighScorses;
        
        highScoreObj.push({
            name: inputValve,
            score: time
        })
    


    }


    console.log("set",highScoreObj);
    localStorage.setItem("highScore", JSON.stringify(
        highScoreObj

    ))

    let highScoreCheck = JSON.parse( localStorage.getItem("highScore") );
    console.log("got",highScoreCheck)

    window.location = "highscore.html"
})
