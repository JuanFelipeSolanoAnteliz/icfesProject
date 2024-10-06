// alert('Hola comunidad Yondosina');

document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const answer = document.querySelector('input[name="question1"]:checked');
    const resultDiv = document.querySelector('.result');
    if (answer) {
        if (answer.value === 'c') {
            resultDiv.textContent = 'Correct!.';
            resultDiv.style.color = '#008000'; // Green for correct answer
        } else {
            resultDiv.textContent = 'Incorrect.';
            resultDiv.style.color = '#cc0000'; // Red for incorrect answer
        }
    } else {
        resultDiv.textContent = 'Please select an answer.';
        resultDiv.style.color = '#cc0000'; // Red for error message
    }
});