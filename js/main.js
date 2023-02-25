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

const partialResult = document.querySelector('#partial-result');


function endGame(userScore, cpuScore) {
  const spanClose = document.createElement('span');
  spanClose.classList.add('close');

  const h1 = document.createElement('h1');

  const p = document.createElement('p');

  let h1Text; 
  let text;

  if (userScore === 10) {
    h1.classList.add('text-win');
    h1Text = document.createTextNode('VICTORY')
    text = document.createTextNode('End of the game. You reached 10 wins! Go ahead and win another match.')
  } else if (cpuScore === 10) {
    h1.classList.add('text-lose');
    h1Text = document.createTextNode('DEFEAT')
    text = document.createTextNode('End of the game. CPU reached 10 wins! Try again.')
  }

  h1.append(h1Text);
  p.append(text);
  
  result.innerHTML = '';
  result.append(spanClose, h1, p);
  modal.style.display = 'block';
}


function getCpuChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}


function win(userChoice, cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;

  if (userScore === 10) {
    endGame(userScore, cpuScore);
  }
    
  partialResult.innerHTML = '';

  const span = document.createElement('span');
  span.classList.add('text-win');
  spanText = document.createTextNode('Win! ');
  span.append(spanText);

  const text = document.createTextNode(`CPU chose ${cpuChoice}, luck is on your side this time!`)

  partialResult.append(span, text);
}


function lose(userChoice, cpuChoice) {
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;

  if (cpuScore === 10) {
    endGame(userScore, cpuScore);
  }

  partialResult.innerHTML = '';

  const span = document.createElement('span');
  span.classList.add('text-lose');
  spanText = document.createTextNode('Lose! ');
  span.append(spanText);

  const text = document.createTextNode(`CPU chose ${cpuChoice}, maybe you'll be lucky next time!`)

  partialResult.append(span, text);
}


function draw(cpuChoice) {
    partialResult.innerHTML = '';

    const text = document.createTextNode(`It's a tie. Try again!`)
    partialResult.append(text);
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
      draw(cpuChoice);
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
    restartGame()
  } else if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = "none"
      restartGame()
    })
  }
}


function restartGame() {
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  partialResult.innerHTML = '';
}


restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);


main();
