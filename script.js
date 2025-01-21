const display = document.getElementById('display');
const history = document.getElementById('history');
let isResult = false;

function backspace() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function clearDisplay() {
    display.textContent = '0';
    isResult = false;
}

function appendValue(value) {
    if (isResult) {
        if (value.match(/\d/)) {
            display.textContent = value; 
        } else {
            display.textContent += value;
        }
        isResult = false;
    } else {
        if (display.textContent === '0' && !value.match(/[+\-*/]/)) {
            display.textContent = value;
        } else {
            display.textContent += value;
        }
    }
}

function calculate() {
    try {
        const result = eval(display.textContent.replace('÷', '/').replace('x', '*'));
        display.textContent = result;
        isResult = true;
        addToHistory(display.textContent);
    } catch (e) {
        display.textContent = 'Erro';
    }
}

function addToHistory(entry) {
    const historyEntry = document.createElement('div');
    historyEntry.textContent = entry;
    history.appendChild(historyEntry);
    history.scrollTop = history.scrollHeight;
}

function clearHistory() {
    history.textContent = '';
}