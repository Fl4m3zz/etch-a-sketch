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


gridContainer = document.querySelector(".grid-container");
grid = createGrid(gridSize);

grid.flat().forEach((gridCell) => {
	gridContainer.appendChild(gridCell);
});
