// Set variables
let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * (max) + min),
    guessesLeft = 3,
    counter = 0,
    playAgain = false,
    continueGame = false;

// Set UI Components
let UImin = document.querySelector('.min'),
    UImax = document.querySelector('.max'),
    UIinput = document.querySelector('.guess-input'),
    UIguessBtn = document.querySelector('.guess-btn');

(function() {
    // Assign UI values
    UImin.textContent = min;
    UImax.textContent = max;

    UIguessBtn.addEventListener('click', function() {
        clearError();
        let val = parseInt(UIinput.value);
        // Validate
        if (isNaN(val) || val < min || val > max) { // Show error msg
            setMessage(`Please enter a number between ${min} and ${max}`, false);
        } else if (val === winningNum && !playAgain) {
            UIinput.disabled = true;
            setMessage(`Yayyy YOU WIN! GOOD JOB!!! The correct number is ${winningNum}`, true);
            UIguessBtn.classList.replace('btn-primary', 'btn-success');
            UIguessBtn.textContent = 'Play Again';
            playAgain = true;
        } else if (!playAgain) {
            counter++;
            if (counter === guessesLeft) {
                UIinput.disabled = true;
                setMessage(`Game over. YOU LOST. The correct number was ${winningNum}`, false);
                UIguessBtn.classList.replace('btn-primary', 'btn-danger');
                UIguessBtn.textContent = 'Play Again';
                playAgain = true;
            } else {
                continueGame = true;
                setMessage(`The number is not correct. ${guessesLeft - counter} guess left..`, false);
            }
        } else {
            counter = 0;
            playAgain = false;
            UIinput.value = '';
            UIinput.disabled = false;
            UIguessBtn.textContent = 'GUESS!';
            UIguessBtn.classList.replace('btn-success', 'btn-primary');
            UIguessBtn.classList.replace('btn-danger', 'btn-primary');
            clearError();
            winningNum = Math.floor(Math.random() * (max) + min);
        }
    });

    UIinput.addEventListener('input', clearError);

}());

function setMessage(msg, status) {
    let div = document.createElement('div');
    if (status) { // valid
        div.className = 'valid-feedback';
        UIinput.classList.add('is-valid');
    } else { // invalid
        div.className = 'invalid-feedback';
        UIinput.classList.add('is-invalid');
    }
    div.appendChild(document.createTextNode(msg));
    document.querySelector('.form-group').insertAdjacentElement('beforeend', div);
}

function clearError() {
    if (UIinput.classList.contains('is-valid')) {
        UIinput.classList.remove('is-valid');
        document.querySelector('.valid-feedback').remove();
    } else if (UIinput.classList.contains('is-invalid')) {
        UIinput.classList.remove('is-invalid');
        document.querySelector('.invalid-feedback').remove();
        if (continueGame) {
            continueGame = false;
            UIinput.value = '';
        }
    }
}