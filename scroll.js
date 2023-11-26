let userAnswer;
let correctAnswer = 'kalvium';

const doneButton = document.querySelector('.run');
const userInput = document.querySelector('.fly');

doneButton.addEventListener('click', checkAnswer);

function checkAnswer() {
    userAnswer = userInput.value.toLowerCase();
    if (userAnswer === correctAnswer) {
        alert('Congratulations! You entered the correct answer.');
        
        window.location.href = 'puzzle.html';
    } else if (userAnswer) {
        alert('Sorry, that is not the correct answer. The correct answer is "kalvium".');
        
        window.location.href = 'failed.html';
    } else {
        alert('Please enter an answer before proceeding.');
    }
}