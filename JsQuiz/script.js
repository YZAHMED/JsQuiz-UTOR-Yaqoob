console.log(`I amloaded`);

const questions = {
    question1 :{
    question: "What is your name?",
    choice1: "Irfan",
    choice2: "Haroon",
    choice3: "Adnan",
    choice4: "Wadhah",
    answer: "Irfan"
}, 
    question2: {
    question: "What is your age?",
    choice1: 24,
    choice2: 36,
    choice3: 33,
    choice4: 18,
    answer: 33
}







};
let nextButton = document.getElementById("buttonNext");
let innerContainer = document.getElementById("innerContainer")
let startButton = document.getElementById("startButton")
let timeLeft = document.getElementById("timeLeft")
let body = document.getElementById("body");
let rules = document.getElementById("rules");

let currentQuestion = 0;
let totalQuestions = Object.keys(questions).length;
let questionToArray = [];
let questionIndex = 0;
let score = 0;
let seconds = 30;


for (const externalKey of Object.keys(questions)){
    questionToArray.push(externalKey);
    console.log(questionToArray)

}

function timeCounter (){
    setInterval(()=>{

        timeLeft.innerHTML = seconds;
        seconds--
    },1000);
};

function hiddenClassRemover (){
    innerContainer.classList.remove('hiddenclass')
};

function questionIndexAdder(){
    questionIndex++
};

function checkTime(){
    return seconds <= 1;
    };

function quizOver(){
    innerContainer.classList.add('hiddenclass')
    showScore()
}

function showScore(){
    startButton.innerText = `Your Score is ${score}`
}

// for (const externalKey of Object.keys(questions)){
startButton.addEventListener("click", e => {
    e.preventDefault()
    timeCounter()
    hiddenClassRemover()

   


    innerContainer.classList.remove('hiddenclass');
    rules.classList.add("hiddenclass");
    startButton.innerText = "NEXT"

    logicOfQuiz()

    setTimeout(quizOver, 30000);

    })

    function logicOfQuiz (){
        if (totalQuestions > questionIndex && checkTime){

            let tempObj = questions[questionToArray[questionIndex]]
        
            console.log(questions[questionToArray[questionIndex]]);
            
            let indexOfButtons = 0;
            let answer = "";
            let choicesContainer = "";
        
            for (const key of Object.keys(tempObj)){
                body.classList.remove("wrong")
                body.classList.remove("correct")
            
        
                let question = document.getElementById("question");
                let choices = document.getElementById(`choice${indexOfButtons}`);
                choicesContainer = document.querySelectorAll(".btn-Choices")
                question.innerText = tempObj.question;
                answer = tempObj.answer;
            
            
                console.log(choices)
                if(key.startsWith("choice")){
                    choices.textContent =  tempObj[key];
                    indexOfButtons++;
            
                }}; questionIndex++;
                let count = 0;
                function choiceContainerFunc(){

                };
                setTimeout(()=>{
                    logicOfQuiz()
                },20000)
                choicesContainer.forEach(choice => {
                    choice.addEventListener("click", e => {
        
                        let count = 0; 
            
                        console.log(e.target.innerText)
                        if (e.target.innerText == answer){
                            score++;
                            count++;
                            body.classList.add("correct")
                            setTimeout(()=>{

                            }, 1000)
                        
                            logicOfQuiz()
        
                            console.log("score is up", score)
                        } else {
                            seconds -= 10
                            body.classList.add("wrong")
                        }
                    }, {once: true});
                    
                });
            } else {
                startButton.innerText = "QUIZ IS OVER"
                quizOver()
            }
    }

    checkTime()