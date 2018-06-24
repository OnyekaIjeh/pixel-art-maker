// Select size input

// When size is submitted by the user, call makeGrid()

//makeGrid function receives number of rows and columns and the canvas
function makeGrid(row, col, canvas) {
  var grid = ''
  for (var x = 0; x < row; x++) {
    grid += '<tr>'
    for (var y = 0; y < col; y++) {
      grid += `<td id="${x}${y}"></td>` //
      if (y === col - 1) {
        grid += '</tr>'
      }
    }
  }
  canvas.html(grid)
}

// Select color input
function pickColor() {
  return $('#colorPicker').val()
}

////////////////////////////////////////////////////////////
//initial code to run on page load
var color = pickColor()
var pixelCanvas = $('#pixelCanvas')

$('#sizePicker').on('submit', function(e) {
  //prevent default page reload
  e.preventDefault()
  color = pickColor()
  var row = $('#inputHeight').val()
  var col = $('#inputWeight').val()
  pixelCanvas = $('#pixelCanvas')

  makeGrid(row, col, pixelCanvas)
})

//change color
$('#colorPicker').on('change', function() {
  color = pickColor()
})

//on click turn each grid to selected color
pixelCanvas.on('click', 'td', function(e) {
  $(e.target).css('background-color', color)
})
