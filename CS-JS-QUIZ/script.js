// Setting up handles

const restartBtn = document.getElementById("restart")
const prevBtn = document.getElementById("previous")
const nextBtn = document.getElementById("next")
const submitBtn = document.getElementById("submit")
// Choices to be added
const trueBtn = document.getElementById("true")
const falseBtn = document.getElementById("false")
const trueBtn1 = document.getElementById("true1")
const falseBtn1 = document.getElementById("false1")

const userScore = document.getElementById("user-score")
const questionText = document.getElementById("total-score")
const time = document.getElementById("time")


// Setting up own variables for maintainence

let currentQuestion = 0;
var score = 0;

let question = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {
                option: "<script>", answer: true
            },
            {
                option: "<javaScript>", answer: false
            },
            {
                option: "<scripting>", answer: false
            },
            {
                option: "<js>", answer: false
            }
        ]
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below? \n \n <p id="demo">This is a demonstration.</p>',
        answers: [
            {
                option: '#demo.innerHTML = "Hello World!";', answer: false
            },
            {
                option: 'document.getElementByName("p").innerHTML = "Hello World!";', answer: false
            },
            {
                option: 'document.getElement("p").innerHTML = "Hello World!";', answer: false
            },
            {
                option: 'document.getElementById("demo").innerHTML = "Hello World!";', answer: true
            }
        ]
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            {
                option: 'The <body> section', answer: false
            },
            {
                option: 'Both the &lt;head&gt; section and the &lt;body&gt; section are correct', answer: true
            },
            {
                option: 'The &lt;head&gt; section', answer: false
            },
            {
                option: 'The meta section', answer: false
            }
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            {
                option: '<script name="xxx.js">', answer: false
            },
            {
                option: '<script href="xxx.js">', answer: false
            },
            {
                option: '<script src="xxx.js">', answer: true
            },
            {
                option: '<script force="xxx.js">', answer: false
            }
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            {
                option: 'msgBox("Hello World");', answer: false
            },
            {
                option: 'alertBox("Hello World");', answer: false
            },
            {
                option: 'alert("Hello World");', answer: true
            },
            {
                option: 'msg("Hello World");', answer: false
            }
        ]
    }
]

// Onclick Event Listners

restartBtn.addEventListener("click", restart);
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
submitBtn.addEventListener("click", submit);


// functions are below

function beginQuiz() {
    currentQuestion = 0;
    questionText.innerHTML = question[currentQuestion].question;
    trueBtn.textContent = question[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if (question[currentQuestion].answers[0].answer) {
            if (score < 5) {
                score++;
            }
        } else {
            console.log("time has to minus")
        }
        userScore.textContent = score;
        if (currentQuestion < 5) {
            next();
        }
    }


    falseBtn.textContent = question[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if (question[currentQuestion].answers[1].answer) {
            if (score < 5) {
                score++;
            }
        } else {
            console.log("time has to minus")
        }
        userScore.textContent = score;
        if (currentQuestion < 5) {
            next();
        }
    }

    trueBtn1.textContent = question[currentQuestion].answers[2].option;
    trueBtn1.onclick = () => {
        if (question[currentQuestion].answers[2].answer) {
            if (score < 5) {
                score++;
            }
        } else {
            console.log("time has to minus")
        }
        userScore.textContent = score;
        if (currentQuestion < 5) {
            next();
        }
    }

    falseBtn1.textContent = question[currentQuestion].answers[3].option;
    falseBtn1.onclick = () => {
        if (question[currentQuestion].answers[3].answer) {
            if (score < 5) {
                score++;
            }
        } else {
            console.log("time has to minus")
        }
        userScore.textContent = score;
        if (currentQuestion < 5) {
            next();
        }
    }



    prevBtn.classList.add('hide');
}
setTimeout(() => {

    submit()
}, 60000);

let seconds = 0;
setInterval(() => {
    time.textContent = seconds;
    seconds++
}, 1000);

beginQuiz();


function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove('hide')
    submitBtn.classList.remove('hide')
    trueBtn.classList.remove('hide')
    falseBtn.classList.remove('hide')
    trueBtn1.classList.remove('hide')
    falseBtn1.classList.remove('hide')
    score = 0;
    userScore.innerHTML = score;
    seconds = 0;
    beginQuiz();
}


function next() {
        timeCheck()
        console.log(currentQuestion)
        currentQuestion++;
        if (currentQuestion >= 4 ) {
            nextBtn.classList.add('hide');
            prevBtn.classList.remove('hide');
        }
        questionText.textContent = question[currentQuestion].question;
        trueBtn.textContent = question[currentQuestion].answers[0].option;
        trueBtn.onclick = () => {
            if (question[currentQuestion].answers[0].answer) {
                if (score < 5) {
                    score++;
                }
            } else {
                seconds += 10;
                console.log("time has to minus")
            }
            userScore.textContent = score;
            if (currentQuestion < 5) {
                next();
            }
        }
    
    
        falseBtn.textContent = question[currentQuestion].answers[1].option;
        falseBtn.onclick = () => {
            if (question[currentQuestion].answers[1].answer) {
                if (score < 6) {
                    score++;
                }
            } else {
                seconds += 10;
                console.log("time has to minus")
            }
            userScore.textContent = score;
            if (currentQuestion < 5) {
                next();
            }
        }
    
        trueBtn1.textContent = question[currentQuestion].answers[2].option;
        trueBtn1.onclick = () => {
            if (question[currentQuestion].answers[2].answer) {
                if (score < 5) {
                    score++;
                }
            } else {
                seconds += 10;
                console.log("time has to minus")
            }
            userScore.textContent = score;
            if (currentQuestion < 4) {
                next();
            } else {
                submit()
                console.log("QuizOver")
            }
        }
    
        falseBtn1.textContent = question[currentQuestion].answers[3].option;
        falseBtn1.onclick = () => {
            if (question[currentQuestion].answers[3].answer) {
                if (score < 5) {
                    score++;
                }
            } else {
                seconds += 10;
                console.log("time has to minus")
            }
            userScore.textContent = score;
            if (currentQuestion < 5) {
                next();
            }
        }
        prevBtn.classList.remove('hide');
    }




    function prev() {
        timeCheck()
        console.log(currentQuestion)
        currentQuestion--;
        if (currentQuestion >= 0 ) {
            nextBtn.classList.remove('hide');
            prevBtn.classList.add('hide');
        }
        questionText.textContent = question[currentQuestion].question;
        trueBtn.textContent = question[currentQuestion].answers[0].option;
        trueBtn.onclick = () => {
            if (question[currentQuestion].answers[0].answer) {
                if (score < 5) {
                    score++;
                }
            } else {
                console.log("time has to minus")
            }
            userScore.textContent = score;
            if (currentQuestion < 5) {
                next();
            }
        }
    
    
        falseBtn.textContent = question[currentQuestion].answers[1].option;
        falseBtn.onclick = () => {
            if (question[currentQuestion].answers[1].answer) {
                if (score < 6) {
                    score++;
                }
            } else {
                console.log("time has to minus")
            }
            userScore.textContent = score;
            if (currentQuestion < 5) {
                next();
            }
        }
    
        trueBtn1.textContent = question[currentQuestion].answers[2].option;
        trueBtn1.onclick = () => {
            if (question[currentQuestion].answers[2].answer) {
                if (score < 5) {
                    score++;
                }
            } else {
                console.log("time has to minus")
            }
            userScore.textContent = score;
            if (currentQuestion < 4) {
                next();
            } else {
                console.log("QuizOver")
            }
        }
    
        falseBtn1.textContent = question[currentQuestion].answers[3].option;
        falseBtn1.onclick = () => {
            if (question[currentQuestion].answers[3].answer) {
                if (score < 5) {
                    score++;
                }
            } else {
                console.log("time has to minus")
            }
            userScore.textContent = score;
            if (currentQuestion < 5) {
                next();
            }
        }
        nextBtn.classList.remove('hide');
    }

    function submit(){
        prevBtn.classList.add('hide')
        submitBtn.classList.add('hide')
        trueBtn.classList.add('hide')
        falseBtn.classList.add('hide')
        trueBtn1.classList.add('hide')
        falseBtn1.classList.add('hide')
        nextBtn.classList.add('hide')
        questionText.textContent = "The Quiz is Submitted"

    }

function timeCheck(){
    if (seconds > 61){
        submit()
    }
}
``