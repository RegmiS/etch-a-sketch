let gridSize = 16;

const container = document.querySelector('.grid-container');

function createGrid() {
    let gridWidth = container.offsetWidth / gridSize;
    container.style.gridTemplateColumns = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
    container.style.gridTemplateRows = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
    if (gridSize < 4) {
      container.style.gridTemplateColumns = `repeat(${gridSize},1fr`;
      container.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;
    }
  
    for (let i = 0; i < gridSize ** 2; i++) {
      const square = document.createElement('div');
      square.classList.add('grid-item');
      square.setAttribute('draggable', 'false');

      square.onmouseover = () => square.style.backgroundColor = 'salmon';
      container.appendChild(square);
    }
  }
  
createGrid();

const reset_btn = document.querySelector('.reset');
reset_btn.addEventListener('click', () => {
    let grid_squares = document.querySelectorAll('.grid-item');
    for(let i=0; i<grid_squares.length; i++){
        grid_squares[i].style.backgroundColor = 'white';
    }
});