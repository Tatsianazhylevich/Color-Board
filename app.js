const board = document.querySelector('#board');
const colors = ['#61039c', '#9407ed', '#b05fe3', '#d10ee3', 
'#840d8f', '#e900ff', '#ff03e2', '#af5bba', '#8300d4', '#aa00ff', 
'#c75bfc', '#995bfc', '#5a14c9', '#a902bf'];
const SQUARES_NUMBER = 1681;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    })

    
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });
    

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxSadow = `1px 1px 3px white`;
}

function removeColor(element) {
    element.style.backgroundColor = '#121212';
    element.style.boxSadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}