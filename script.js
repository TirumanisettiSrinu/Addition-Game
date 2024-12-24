let first, second, result;
first = Math.floor(Math.random() * 100) + 1;
second = Math.floor(Math.random() * 100) + 1;
result = first + second;
document.getElementById('firstNumber').textContent = parseInt(first);
document.getElementById('secondNumber').textContent = parseInt(second);

function restart() {
    first = Math.floor(Math.random() * 100) + 1;
    second = Math.floor(Math.random() * 100) + 1;
    result = first + second;

    document.getElementById('firstNumber').textContent = parseInt(first);
    document.getElementById('secondNumber').textContent = parseInt(second);
    document.getElementById('userInput').value = '';
    document.getElementById('gameResult').textContent = '';
}

function check() {
    let input = parseInt(document.getElementById('userInput').value);
    if (input === result) {
        document.getElementById('gameResult').textContent = "Congratulations! You got it Right";
        document.getElementById('gameResult').style.backgroundColor = "#028a0f";
    } else {
        document.getElementById('gameResult').textContent = "Please Try Again!";
        document.getElementById('gameResult').style.backgroundColor = "#1e217c";
    }
}