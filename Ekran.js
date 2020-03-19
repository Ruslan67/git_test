function black() {
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function(e){
            e.target.style.background = 'black';
        })
    });
}

function genDivs(n) {
    for (let i = 0; i < n*n; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        document.documentElement.style.setProperty('--numCol', n);
        container.appendChild(cell);
        cell.addEventListener("mouseover", function(e){
            e.target.style.background = "black";
        });
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomRGB() {
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function(e){
            e.target.style.background = getRandomColor();
        })
    });
}

function resizeGrid() {
    let input = prompt('How many squares per side? (Max 64)');
    gridSize = parseInt(input);
    if (Number.isInteger(gridSize) && gridSize < 65 && gridSize > 0) {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        genDivs(gridSize);
    } else {
        alert('Please enter a number between 1 - 64');
        resizeGrid();
    }
}

let gridSize = 16;
window.onload = genDivs(gridSize);
let blackBtn = document.querySelector('#black');
let rainbowBtn = document.querySelector('#rainbow');
let resizeBtn = document.querySelector('#resize');
blackBtn.onclick =  black();
rainbowBtn.onclick = randomRGB();
resizeBtn.onclick = resizeGrid();

