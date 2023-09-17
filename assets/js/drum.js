function playAudio(letter){
    var audio;
    switch(letter){
        case 'w' :  audio = new Audio("assets/sounds/drum/tom-1.mp3");
                    break;
        case 'a' :  audio = new Audio("assets/sounds/drum/tom-2.mp3");
                    break;
        case 's' :  audio = new Audio("assets/sounds/drum/tom-3.mp3");
                    break;
        case 'd' :  audio = new Audio("assets/sounds/drum/tom-4.mp3");
                    break;
        case 'j' :  audio = new Audio("assets/sounds/drum/crash.mp3");
                    break;
        case 'k' :  audio = new Audio("assets/sounds/drum/kick-bass.mp3");
                    break;
        case 'l' :  audio = new Audio("assets/sounds/drum/snare.mp3");
                    break;
        default :   console.log("invalid");
    }
    audio.play();
}
function handleClick(){
    var char = this.innerHTML;
    playAudio(char);    
    addAnimation(char);
}

function addAnimation(letter){
    var activeButtonClass = "."+letter;
    document.querySelector(activeButtonClass).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(activeButtonClass).classList.remove("pressed");
    }, 150);
}
var buttons = document.querySelectorAll(".drum");

document.addEventListener("keydown", function (event){
    playAudio(event.key);
    addAnimation(event.key);
})

for(var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", handleClick);
}