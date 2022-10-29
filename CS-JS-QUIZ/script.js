// Setting up handles

const restartBtn = document.getElementById("restart")
const prevBtn = document.getElementById("previous")
const nextBtn = document.getElementById("next")
const submitBtn = document.getElementById("submit")
// Choices to be added

const userScore = document.getElementById("user-score")
const questionText = document.getElementById("total-score") 


// Setting up own variables for maintainence

let currentQuestion = 0;
let score = 0;

let question = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {
                option:  "<script>", answer : true
            },
            {
                option:  "<javaScript>", answer : false
            },
            {
                option:  "<scripting>", answer : false
            },
            {
                option:  "<js>", answer : false
            }
        ]
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below? \n \n <p id="demo">This is a demonstration.</p>',
        answers: [
            {
                option:  '#demo.innerHTML = "Hello World!";', answer : false
            },
            {
                option:  'document.getElementByName("p").innerHTML = "Hello World!";', answer : false
            },
            {
                option:  'document.getElement("p").innerHTML = "Hello World!";', answer : false
            },
            {
                option:  'document.getElementById("demo").innerHTML = "Hello World!";', answer : true
            }
        ]
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            {
                option:  'The <body> section', answer : false
            },
            {
                option:  'Both the &lt;head&gt; section and the &lt;body&gt; section are correct', answer : true
            },
            {
                option:  'The &lt;head&gt; section', answer : false
            },
            {
                option:  'The meta section', answer : false
            }
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            {
                option:  '<script name="xxx.js">', answer : false
            },
            {
                option:  '<script href="xxx.js">', answer : false
            },
            {
                option:  '<script src="xxx.js">', answer : true
            },
            {
                option:  '<script force="xxx.js">', answer : false
            }
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            {
                option:  'msgBox("Hello World");', answer : false
            },
            {
                option:  'alertBox("Hello World");', answer : true
            },
            {
                option:  'alert("Hello World");', answer : false
            },
            {
                option:  'msg("Hello World");', answer : false
            }
        ]
    }
]