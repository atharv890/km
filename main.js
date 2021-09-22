canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=100;
height=100;
windows.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if (keypressed>=122)  
{
document.getElementById("myCanvas").innerHTML="You pressed Alphabet key";
console.log(keydown);
}
}

