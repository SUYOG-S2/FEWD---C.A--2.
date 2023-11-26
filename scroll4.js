
let userAnswer;
let correctAnswer = 'kill';

const doneButton = document.getElementById('won');
const userInput = document.getElementById('kl');

doneButton.addEventListener('click', checkAnswer);

function checkAnswer() {
    userAnswer = userInput.value.toLowerCase();
    if (userAnswer === correctAnswer) {
        alert('Congratulations! You entered the correct answer.');
        
        window.location.href = 'over.html';
    } else if (userAnswer) {
        alert('Sorry, that is not the correct answer. The correct answer is "kill".');
        
        window.location.href = 'failed.html';
    } else {
        alert('Please enter an answer before proceeding.');
    }
}