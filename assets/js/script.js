let firstQuestion  = {
    question: 'In which UK city would you find the river Clyde?',
    answers: ['Dundee', 'Glasgow', 'Manchester', 'Sheffield'],
    correctAnswer: 1
}

let secondQuestion  = {
    question: 'In which city would you  find La Sagrada Familia?',
    answers: ['Berlin', 'Lisbon', 'Geneva', 'Barcelona'],
    correctAnswer: 3
}

let thirdQuestion  = {
    question: 'The Strait of Gibraltar separates the Iberian peninsular from which African nation?',
    answers: ['Western Sahara', 'Morocco', 'Algeria', 'Tunisia'],
    correctAnswer: 1
}

let fourthQuestion  = {
    question: 'What is the only country with a coastline on both the Red Sea and the Persian Gulf?',
    answers: ['Saudi Arabia', 'Yemen', 'Jordan', 'Iran'],
    correctAnswer: 0
}

let fifthQuestion  = {
    question: 'Sofia is the capital of which country?',
    answers: ['Romania', 'Moldova', 'Bulgaria', 'Kosovo'],
    correctAnswer: 2
}

let sixthQuestion  = {
    question: 'Azerbaijan borders on which sea?'
    answers: ['Persian Gulf', 'Red Sea', 'Black Sea', 'Caspian Sea'],
    correctAnswer: 3
}

let seventhQuestion  = {
    question: 'Which is the only country that both the Equator and the Tropic of Capricorn pass?'
    answers: ['Brazil', 'Kenya', 'Indonesia', 'Colombia'],
    correctAnswer: 0
}

let eighthQuestion  = {
    question: 'The world largest port can be found in which city?'
    answers: ['Singapore', 'Dubai', 'Shanghai', 'New York'],
    correctAnswer: 2
}

let ninthQuestion  = {
    question: 'A road tunnel runs from Pelerins in France to Entreves in Italy under which mountain?'
    answers: ['Monte Rosa', 'Mont Blanc', 'Lyskamm', 'Matterhorn'],
    correctAnswer: 1
}

let tenthQuestion  = {
    question: 'What is the Longest river in India?'
    answers: ['Ganges', 'Narmada', 'Yamuna' , 'Indus'],
    correctAnswer: 1
}

// set question

function showQuestion(q) {
    let selectQuestion = document.getElementById('question');
    selectQuestion.textContent = q.question;
    let answers = document.querySelectorAll('.answer-button');
    answers.forEach(function(element, index){
        element.textContent = q.answer-button[index]
    })
}

showQuestion(firstQuestion);


