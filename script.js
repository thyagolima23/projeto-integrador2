import getWord from "./words.js"; // Importa palavras do words.js

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");
const levelSelect = document.querySelector("#level");
const guessInputContainer = document.querySelector(".guess-input-container");
const guessInput = document.querySelector(".guess-input");
const guessBtn = document.querySelector(".guess-btn");

let indexImg;
let selectedWord;
let correctGuesses = 0;

btnNew.onclick = () => init();
levelSelect.onchange = () => init();
guessBtn.onclick = checkFullWord;

init();

function init() {
  indexImg = 1;
  correctGuesses = 0;
  img.src = `img1.png`;
  guessInputContainer.style.display = "none"; // Esconde o campo de chute

  generateGuessSection();
  generateButtons();
}

function generateGuessSection() {
  contentGuessWord.textContent = "";

  const { word, clue } = getWordByLevel();
  selectedWord = word.toUpperCase();
  
  const wordWithoutAccent = selectedWord
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(wordWithoutAccent).forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = "_";
    span.setAttribute("word", letter.toUpperCase());
    contentGuessWord.appendChild(span);
  });

  contentClue.textContent = `Dica: ${clue}`;
}

function getWordByLevel() {
  const level = levelSelect.value;
  let wordData;
  
  do {
    wordData = getWord();
  } while (
    (level === "facil" && wordData.word.length < 6) ||
    (level === "medio" && (wordData.word.length >= 6 || wordData.word.length < 9)) ||
    (level === "dificil" && wordData.word.length >= 9)
  );

  return wordData;
}

function wrongAnswer() {
  indexImg++;
  img.src = `img${indexImg}.png`;

  if (indexImg === 7) {
    setTimeout(() => {
      alert("☹️ Você perdeu! A palavra era: " + selectedWord);
      init();
    }, 100);
  }
}

function verifyLetter(letter) {
  const arr = document.querySelectorAll(`[word="${letter}"]`);
  
  if (!arr.length) {
    wrongAnswer();
  } else {
    arr.forEach((e) => {
      e.textContent = letter;
    });

    correctGuesses += arr.length;
  }

  if (correctGuesses >= 2) {
    guessInputContainer.style.display = "flex"; // Mostra o campo de chute
  }

  checkWin();
}

function checkWin() {
  const spans = document.querySelectorAll(`.guess-word span`);
  const won = !Array.from(spans).find((span) => span.textContent === "_");

  if (won) {
    setTimeout(() => {
      alert("🎉 Parabéns! Você venceu!");
      init();
    }, 100);
  }
}

function generateButtons() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letter = String.fromCharCode(i).toUpperCase();
    btn.textContent = letter;

    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
      verifyLetter(letter);
    };

    contentBtns.appendChild(btn);
  }
}

function checkFullWord() {
  const userGuess = guessInput.value.trim().toUpperCase();

  if (userGuess === selectedWord) {
    // Preenche todas as letras na interface
    const spans = document.querySelectorAll(".guess-word span");
    spans.forEach((span, index) => {
      span.textContent = selectedWord[index];
    });

    setTimeout(() => {
      alert("🎉 Parabéns! Você acertou a palavra!");
      init();
    }, 500);
  } else {
    alert("❌ Palavra incorreta! Tente novamente.");
  }

  guessInput.value = ""; // Limpa o input para novas tentativas
}