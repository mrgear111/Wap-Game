
const truthQuestions = [
    "What's the most embarrassing thing you've ever done?",
    "What's your biggest fear?",
    "What's one thing you've never told anyone?",
    "What was the last lie you told?",
    "What's your biggest insecurity?",
    "What's the most childish thing you still do?",
    "What's the worst gift you've ever received?",
    "What's your biggest regret?",
    "Have you ever cheated on a test?",
    "What's the worst date you've ever been on?"
];

const dareQuestions = [
    "Do your best impression of a celebrity",
    "Call a friend and sing them a song",
    "Do 10 push-ups right now",
    "Speak in an accent for the next three rounds",
    "Let someone post anything they want on your social media",
    "Show the last five photos in your camera roll",
    "Text your crush or a random contact a funny joke",
    "Do your best dance move",
    "Eat a spoonful of a condiment of the group's choosing",
    "Let someone style your hair however they want"
];


const truthBtn = document.getElementById('truth-btn');
const dareBtn = document.getElementById('dare-btn');
const nextBtn = document.getElementById('next-btn');
const questionText = document.getElementById('question-text');
const card = document.querySelector('.card');


let currentQuestionType = null;


function getRandomQuestion(type) {
    const questions = type === 'truth' ? truthQuestions : dareQuestions;
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function showQuestion(type) {
    currentQuestionType = type;
    const question = getRandomQuestion(type);
    questionText.textContent = question;
    card.classList.add('flipped');
}

function resetCard() {
    card.classList.remove('flipped');
    currentQuestionType = null;
}


truthBtn.addEventListener('click', () => {
    showQuestion('truth');
});

dareBtn.addEventListener('click', () => {
    showQuestion('dare');
});

nextBtn.addEventListener('click', () => {
    resetCard();
});
