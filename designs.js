/* JavaScript function to create the grid when submit button is clicked.
 * It takes in height and width of the grid from the html form and creates
 * the grid on the table canvas element in html page.
 */
function Grid() {
    let a;
    let b;
    let height = document.getElementById('input_Height').value;
    let width = document.getElementById('input_Width').value;
    let table = document.getElementById('pixel_Canvas');
	// Table grid creation code :
    table.innerHTML = '';
    let tbody = document.createElement('tbody');
    for (a = 0; a < height; a++) {
        let row = document.createElement('tr');
        for ( b = 0; b < width; b++) {
            let col = document.createElement('td');
            col.appendChild(document.createTextNode(''));
            row.appendChild(col);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
}

//jQuery to change color of pixel when clicked.
$('body').on('click', 'td', function() {
	let c = document.getElementById('colorpicker').value;
    $(this).css('background-color', c);
});
