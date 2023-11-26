let userAnswer;
let correctAnswer = '1939';

const doneButton = document.getElementById('mky');
const userInput = document.getElementById('opy');

doneButton.addEventListener('click', checkAnswer);

function checkAnswer() {
    userAnswer = userInput.value.toLowerCase();
    if (userAnswer === correctAnswer) {
        alert('Congratulations! You entered the correct answer.');
        
        window.location.href = 'Answer.html';
    } else if (userAnswer) {
        alert('Sorry, that is not the correct answer. The correct answer is "Kalvium".');
        
        window.location.href = 'failed.html';
    } else {
        alert('Please enter an answer before proceeding.');
    }
}