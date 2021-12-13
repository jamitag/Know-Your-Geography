let questionsArray = [
    {
        question: "In which UK city would you find the river Clyde?",
        answer: ['Dundee', 'Glasgow', 'Manchester', 'Sheffield'],
        correctAnswer: "Glasgow"
    }, 
    {
        question: "In which city would you find La Sagrada Familia?",
        answer: ['Berlin', 'Lisbon', 'Geneva', 'Barcelona'],
        correctAnswer: "Barcelona"
    }, 
    {
        question: "The Strait of Gibraltar separates the Iberian peninsular from which African nation?",
        answer: ['Western Sahara', 'Morocco', 'Algeria', 'Tunisia'],
        correctAnswer: "Morocco"
    }, 
    {
        question: "What is the only country with a coastline on both the Red Sea and the Persian Gulf?",
        answer: ['Saudi Arabia', 'Yemen', 'Jordan', 'Iran'],
        correctAnswer: "Saudi Arabia"
    },
    {
        question: "Sofia is the capital of which country?",
        answer: ['Romania', 'Moldova', 'Bulgaria', 'Kosovo'],
        correctAnswer: "Bulgaria"
    },
    {
        question: "Azerbaijan borders on which sea?",
        answer: ['Persian Gulf', 'Red Sea', 'Black Sea', 'Caspian Sea'],
        correctAnswer: "Caspian Sea"
    },
    {
        question: "Which is the only country that both the Equator and the Tropic of Capricorn pass",
        answer: ['Brazil', 'Kenya', 'Indonesia', 'Colombia'],
        correctAnswer: "Brazil"
    },
    {
        question: "The world largest port can be found in which city?",
        answer: ['Singapore', 'Dubai', 'Shanghai', 'New York'],
        correctAnswer: "Shanghai"
    },
    {
        question: "A road tunnel runs from Pelerins in France to Entreves in Italy under which mountain?",
        answer: ['Monte Rosa', 'Mont Blanc', 'Lyskamm', 'Matterhorn'],
        correctAnswer: "Mont Blanc"
    },
    {
        question: "What is the Longest river in India?",
        answer: ['Ganges', 'Narmada', 'Yamuna' , 'Indus'],
        correctAnswer: "Ganges"
    }
]

// global variables

let i = 0;
let score = 0;
let total = questionsArray.length;
let answer = "";
let buttons=document.querySelectorAll('[id^="button-"]')
let scoreText = document.getElementById("score")
scoreText.textContent=score;
let totalText = document.getElementById("total");
totalText.textContent=total;


//this function will allow clicking of the play button to take the user to the first question
function startQuiz() {
    let primaryBox = document.getElementById("primary-box");
    primaryBox.style.display = "inline";
    let playBox = document.getElementById("play-box");
    playBox.style.display = "none";
    nextQuestion();
}

//clicking the 'next' button will move onto the next question
function nextQuestion() {
    let selectQuestion = document.getElementById('question');
    selectQuestion.textContent = questionsArray[i].question;

    for (let x=0; x < buttons.length; x++) {
        buttons[x].textContent = questionsArray[i].answer[x]
        buttons[x].classList.remove("active")
    }
    answer = "";
    i++;
}

//assign the chosen value for user to submit
function changeAnswer(inputButton, input){
    answer = input

    for(var x=0; x < buttons.length; x++){
        if(buttons[x].classList.contains("active")){
            buttons[x].classList.remove("active")
        }
    }
    inputButton.classList.add("active")
}

//identifying correct answer and adding to score then moving on to next question
function answerQuestion() {
    if(answer === ""){
        return
    }
    if (answer === questionsArray[i].correctAnswer){
        score++
    }
    nextQuestion()
}




