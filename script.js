let num = 0;
const maxNum = 150;
const minNum = 0;

let history = [];
let historyIndex = -1;

const display = document.getElementById('number-display');
const progress = document.getElementById('progress');

function updateDisplay() {
    display.textContent = num;
    progress.style.width = (num / maxNum) * 100 + '%';
}

function addNumber() {
    if (num < maxNum) {
        num++;
        addToHistory();
        updateDisplay();
    }
}

function subtractNumber() {
    if (num > minNum) {
        num--;
        addToHistory();
        updateDisplay();
    }
}

function addToHistory() {
    history = history.slice(0, historyIndex + 1);
    history.push(num);
    historyIndex++;
}

function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        num = history[historyIndex];
        updateDisplay();
    }
}

function redo() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        num = history[historyIndex];
        updateDisplay();
    }
}

window.onload = () => {
    addToHistory(); // Add initial state to history
    updateDisplay();
};
