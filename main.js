Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
colour="red";
line_width=3;
var mouseevent="empty";
var last_X, last_Y;
Canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
}
Canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
}
Canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}
Canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
 var current_X=e.clientX-Canvas.offsetLeft;
 var current_Y=e.clientY-Canvas.offsetTop; 
 if(mouseevent=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=colour;
     ctx.line_width=line_width;
     ctx.moveTo(last_X,last_Y);
     ctx.lineTo(current_X,current_Y);
 }
 last_X=current_X;
 last_Y=current_Y;
}
