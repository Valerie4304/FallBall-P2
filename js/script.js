var character = document.getElementById("character");

function moveLeft(){
    var left =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0){
    character.style.left = left - 2 + "px";
    }
}
function moveRight(){
    var left =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<380){
    character.style.left = left - 2 + "px";
    }
}
document.addEventListener("keydown", event => {
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
        interval = setInterval(moveLeft, 1);
        }
        if(event.key==="ArrowRight"){
        interval = setInterval(moveRight, 1);
        }
    }
});

document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});

var block = document.createElement("div");
var hole = docment.createElement("div");
block.setAttribute("class", "block");
hole.setAttribute("class", "hole");