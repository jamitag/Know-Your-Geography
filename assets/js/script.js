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
let primaryBox = document.getElementById("primary-box");
let playBox = document.getElementById("play-box");
let total = questionsArray.length;
let answer = "";
let buttons = document.querySelectorAll('[id^="button-"]')
let scoreText = document.getElementById("score")
scoreText.textContent=score;
let totalText = document.getElementById("total");
totalText.textContent = total;
let resultBox = document.getElementById("result-box");
let congratulations = document.getElementById("congratulations");
let tryAgain = document.getElementById("try-again");


//this function will allow clicking of the play button to take the user to the first question
function startQuiz() {
    primaryBox.style.display = "";
    playBox.style.display = "none";
    nextQuestion();
}

//displays each question by iterating through the questionArray and shows corresponding answer options
function nextQuestion() {
    //populates question
        let selectQuestion = document.getElementById('question');
        selectQuestion.textContent = questionsArray[i].question;
    //populates answers
        for (let x=0; x < buttons.length; x++) {
            buttons[x].textContent = questionsArray[i].answer[x]
            buttons[x].classList.remove("active")
            }
}

//clicking an answer button calls this function. It allows user to select one of the four answer options and remain active
function changeAnswer(inputButton, input){
    answer = input

    for(var x=0; x < buttons.length; x++){
        if(buttons[x].classList.contains("active")){
            buttons[x].classList.remove("active")
        }
    }
    inputButton.classList.add("active")
}

//prevents user from proceeding without selecting a choice. Identifies last question and calls relavant function  and also adds correct answer to score counter
function answerQuestion() {
    console.log(i);
    if (i === (questionsArray.length - 1)){
        finishQuiz();
        return;
    }
    if(answer === ""){
        return
    }
    if (answer === questionsArray[i].correctAnswer){
        score++
        scoreText.textContent=score;
    }
    i++;
    nextQuestion()
}





