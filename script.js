function createGrid(size) {
	let grid = [];
	for (let i = 0; i < size; i++) {
		grid.push([]);
		for (let j = 0; j < size; j++) {
			gridCell = document.createElement("div");
			gridCell.style.width = `${100/size}%`;
			gridCell.style.height = `${100/size}%`;
			gridCell.addEventListener("mouseover", (e) => {
				e.target.style.backgroundColor = "black";	
			});
			grid[i].push(gridCell);
		}
	}
	return grid;
}

function clearGrid(gridContainer) {
	gridCells = document.querySelectorAll(".grid-container > *");
	gridCells.forEach((gridCell) => {
		gridContainer.removeChild(gridCell);
	});
}

function drawGrid(gridSize) {
	gridContainer = document.querySelector(".grid-container");
	clearGrid(gridContainer);
	grid = createGrid(gridSize);

	grid.flat().forEach((gridCell) => {
		gridContainer.appendChild(gridCell);
	});
}

let gridSize = 100;

let gridSizeButton = document.querySelector(".size-input > #submit-grid-size");
let gridSizeText = document.querySelector(".size-input > #grid-size");

gridSizeButton.addEventListener("click", (e) => {
	try {
		gridSize = parseInt(gridSizeText.value);
		if (isNaN(gridSize)) {
			throw new Error("Not a number!");
		} else {
			drawGrid(gridSize);
		}
	} catch (err) {
		alert(err);
	}
	gridSizeText.value = "";
});
	
drawGrid(gridSize);
