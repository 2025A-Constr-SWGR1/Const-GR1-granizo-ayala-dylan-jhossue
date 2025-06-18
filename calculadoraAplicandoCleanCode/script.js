// script.js
let currentInput = "";
let lastResult = "-";

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}

function updateHistory(result) {
  document.getElementById("history").textContent = `Resultado previo: ${result}`;
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (!currentInput || isOperator(lastChar())) return;
  currentInput += operator;
  updateDisplay();
}

function appendDot(dot) {
  const lastNumber = currentInput.split(/[-+*/]/).pop();
  if (!lastNumber.includes(dot)) {
    currentInput += dot;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  if (!currentInput || isOperator(lastChar())) return;
  try {
    const result = eval(currentInput);
    lastResult = result;
    currentInput = result.toString();
    updateDisplay();
    updateHistory(result);
  } catch {
    currentInput = "Error";
    updateDisplay();
  }
}

function lastChar() {
  return currentInput.slice(-1);
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

// Teclado
document.addEventListener('keydown', (event) => {
  const { key } = event;
  if (!isNaN(key)) appendNumber(key);
  if (['+', '-', '*', '/'].includes(key)) appendOperator(key);
  if (key === '.') appendDot('.');
  if (key === 'Backspace') deleteLast();
  if (key === 'Enter') calculateResult();
  if (key === 'Escape') clearDisplay();
});
