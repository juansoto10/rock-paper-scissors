let userScore = 0;
let cpuScore = 0;
let closeBtn;

const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");

const restart = document.getElementById("restart");
const result = document.getElementById("result");
const modal = document.querySelector(".modal");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getCpuChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function win(userChoice, cpuChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result.innerHTML = `<span class="close"></span> <h1 class="text-win">YOU WON</h1> <p>CPU chose <strong>${cpuChoice}</strong>, luck is on your side this time!</p>`;
    modal.style.display = 'block';

    // console.log('You won, luck is on your side this time!');
    // console.log(`Player 1: ${userChoice}\nCPU: ${cpuChoice}`);
}

function lose(userChoice, cpuChoice) {
    cpuScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result.innerHTML = `<span class="close"></span> <h1 class="text-lose">YOU LOST</h1> <p>CPU chose <strong>${cpuChoice}</strong>, maybe you will be lucky next time!</p>`;
    modal.style.display = 'block';

    // console.log('You lost :C: Maybe you will be lucky next time!');
    // console.log(`Player 1: ${userChoice}\nCPU: ${cpuChoice}`);
}

function draw(userChoice, cpuChoice) {
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result.innerHTML = `<span class="close"></span> <h1 class="text-lose">IT'S A DRAW</h1> <p>You both chose <strong>${cpuChoice}</strong>, try again!</p>`;
    modal.style.display = 'block';

    // console.log(`It's a tie. Try again!`);
    // console.log(`Player 1: ${userChoice}\nCPU: ${cpuChoice}`);
}

function play(userChoice) {
    const cpuChoice = getCpuChoice();
    switch (userChoice + cpuChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, cpuChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, cpuChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, cpuChoice);
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        play('rock');
    })

    paper_div.addEventListener('click', function() {
        play('paper');
    })

    scissors_div.addEventListener('click', function() {
        play('scissors');
    })
}


function clearModal(e) {
    closeBtn = document.querySelector('.close');

    if (e.target == modal) {
        modal.style.display = "none"
    }
    else if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none"
        })
    }
}


function restartGame() {
    userScore = 0;
    cpuScore = 0;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
}


restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);

main();