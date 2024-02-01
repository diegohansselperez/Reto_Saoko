const ROCK = 0;
const SCISSORS = 1;
const PAPER = 2;

const TIE = 0;
const WIN = 1;
const LOST = 2;

let scoreU = 0;
let scoreC = 0;

const btnPaper = document.getElementById('paper');
const btnRock = document.getElementById('rock');
const btnScissors = document.getElementById('scissors');

let resultText = document.getElementById('result-text');

const userScore = document.getElementById('user_score');
const computerScore = document.getElementById('computer_score');

btnPaper.addEventListener('click', () => {
  getPlay(PAPER);
});
btnRock.addEventListener('click', () => {
  getPlay(ROCK);
});
btnScissors.addEventListener('click', () => {
  getPlay(SCISSORS);
});

// Funcion de CONTROL se encarga de ejecutar el MathRandom y pasarsela a la funcion de comparar, asi nos entregara un numero entre el 0 y 2, haci vamos ejecutando funciones dependiendo el uso.
function getPlay(userOption) {
  const computerOption = Math.floor(Math.random() * 3);
  const result = calcResult(userOption, computerOption);

  getResult(result);
}

// Compara cada uno de las maons que usamos en cada partida junto con el de la maquina.
function calcResult(userOption, computerOption) {
  if (userOption === computerOption) {
    return TIE;
  } else if (userOption === ROCK) {
    if (computerOption === PAPER) return LOST;
    if (computerOption === SCISSORS) return WIN;
  } else if (userOption === SCISSORS) {
    if (computerOption === PAPER) return WIN;
    if (computerOption === ROCK) return LOST;
  } else if (userOption === PAPER) {
    if (computerOption === SCISSORS) return LOST;
    if (computerOption === ROCK) return WIN;
  }
}

// Retorna el texto correcto en el resultado de cada partida
function showResultMessage(resulted) {
  switch (resulted) {
    case TIE:
      scoreBoard(resulted);
      resultText.innerHTML = 'TIE!';
      break;
    case WIN:
      scoreBoard(resulted);
      resultText.style.color = '#77dd77';
      resultText.innerHTML = 'YOU WIN!';
      break;
    case LOST:
      scoreBoard(resulted);
      resultText.style.color = '#ff6961';
      resultText.innerHTML = 'YOU LOST!';
      break;
  }
}

// Aumenta el scoreBoard del usuario y maquina
function scoreBoard(result) {
  if (result === WIN) {
    scoreU += 1;

    userScore.innerHTML = scoreU;
  } else if (result === LOST) {
    scoreC += 1;
    computerScore.innerHTML = scoreC;
  } else if (result === TIE) {
    return;
  }
}

// resetaar el color y texto predeterminado del result text
function resetText() {
  let resultText = document.getElementById('result-text');

  resultText.style.color = '';
  resultText.innerHTML = 'V.S';
}

// Se encarga de hacer un pequeno tiempo para mostrar al jugador el resultado, una vez lo muestra cambia a su estado inicial.
async function getResult(resulted) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  showResultMessage(resulted);

  await new Promise((resolve) => setTimeout(resolve, 500));
  resetText();
}
