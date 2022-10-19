console.log(`I amloaded`);

const questions = {
    question1 :{
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<script>",
    choice2: "<javaScript>",
    choice3: "<scripting>",
    choice4: "<js>",
    answer: "<script>"
}, 
    question2: {
    question: 'What is the correct JavaScript syntax to change the content of the HTML element below? \n \n <p id="demo">This is a demonstration.</p>',
    choice1:  '#demo.innerHTML = "Hello World!";',
    choice2:  'document.getElementByName("p").innerHTML = "Hello World!";',
    choice3: 'document.getElement("p").innerHTML = "Hello World!";',
    choice4: 'document.getElementById("demo").innerHTML = "Hello World!";',
    answer: 'document.getElementById("demo").innerHTML = "Hello World!";'
}, 
    question3: {
    question: 'Where is the correct place to insert a JavaScript?',
    choice1:  'The <body> section',
    choice2:  'Both the &lt;head&gt; section and the &lt;body&gt; section are correct',
    choice3: 'The &lt;head&gt; section',
    choice4: 'The meta section',
    answer: 'Both the &lt;head&gt; section and the &lt;body&gt; section are correct'
}, 
    question4: {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    choice1:  '<script name="xxx.js">',
    choice2:  '<script href="xxx.js">',
    choice3: '<script src="xxx.js">',
    choice4: '<script force="xxx.js">',
    answer: '<script src="xxx.js">'

}, 
    question5: {
    question: 'How do you write "Hello World" in an alert box?',
    choice1:  'msgBox("Hello World");',
    choice2:  'alertBox("Hello World");',
    choice3: 'alert("Hello World");',
    choice4: 'msg("Hello World");',
    answer: 'alert("Hello World");'
}







};
let nextButton = document.getElementById("buttonNext");
let innerContainer = document.getElementById("innerContainer")
let startButton = document.getElementById("startButton")
let timeLeft = document.getElementById("timeLeft")
let body = document.getElementById("body");
let rules = document.getElementById("rules");
let gameOver = document.getElementById("gameOver");
let inputName = document.getElementById("inputName");
let inputNameBtn = document.getElementById("inputNameBtn");
let viewHighScore = document.getElementById("showscoreButton")

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

// function questionIndexAdder(){
//     questionIndex++
// };

function checkTime(){
    return seconds <= 1;
    };

function quizOver(){
    innerContainer.classList.add('hiddenclass')
    
    gameOver.classList.remove("hiddenclass")
    inputNameBtn.addEventListener("click", ()=>{
        localStorage.setItem("initials", `${inputName.value}'s score is ${score}`)
        showScore()
    })
    

}

function showScore(){
    setTimeout(()=>{
        body.innerHTML = `<h2 class="centerH2"> ${localStorage.getItem("initials")} </h2>`
    },0001)
    // startButton.innerText = `Your Score is ${localStorage.getItem("initials")} ${score}`
}

viewHighScore.addEventListener("click", ()=>{
    showScore()
})
// for (const externalKey of Object.keys(questions)){
startButton.addEventListener("click", e => {
    e.preventDefault()
    timeCounter()
    hiddenClassRemover()
    
   


    innerContainer.classList.remove('hiddenclass');
    rules.classList.add("hiddenclass");
    viewHighScore.classList.remove("showscoreButton");
    viewHighScore.classList.add("hiddenclass");
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
            
        
                let question = document.getElementById("question");
                let choices = document.getElementById(`choice${indexOfButtons}`);
                choicesContainer = document.querySelectorAll(".btn-Choices")
                question.innerText = tempObj.question;
                answer = tempObj.answer;
            
            
                console.log(choices)
                if(key.startsWith("choice")){
                    choices.textContent =  tempObj[key];
                    indexOfButtons++;
            
                }}; 
                // questionIndex++;
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
                            console.log(questionIndex, "question index")
                            questionIndex++;
                        
                            logicOfQuiz()
        
                            console.log("score is up", score)
                        } else {
                            seconds -= 10

                            console.log(questionIndex, "question index")
                            logicOfQuiz()
                        }
                    }
                    );
                    
                });
            } else {
                startButton.innerText = "QUIZ IS OVER"
                quizOver()
            };
    }

    checkTime()

