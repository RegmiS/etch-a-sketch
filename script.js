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
