// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const sizePicker = document.getElementById('sizePicker')
//Make the table global so it can be called from the makeGrid function
const table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function() {
    event.preventDefault();

    let width = document.getElementById('inputWeight').value;
    let height = document.getElementById('inputHeight').value;
    makeGrid(height,width);
});



function makeGrid(height,width) {
    table.innerHTML = '';
    for (let i = 0; i < height; i++) {
        let row = table.insertRow();
        for (let j = 1; j <= width; j++) {
            let cell = row.insertCell();
            cell.onclick = changeColor;
        }
    }
}

//Make your grid toggleable i.e the person can toggle the colour on a cell on click
function changeColor() {
    this.style.background = color.value;
}

    
