var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
	if(width < 992)
	{
	document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
	}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
  
  console.log("my_touchstart");
  
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;

  mouseEvent ="mouseDown"

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
  
  console.log("my_touchMove");
  
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;
}

    // old same old as the paint web app
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // end of old same old as the paint web app