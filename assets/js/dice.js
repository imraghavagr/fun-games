document.querySelector(".btn-outline-success").addEventListener("click", playGame);
document.querySelector(".btn-outline-danger").addEventListener("click", reset);
function getRandomNumber(){
    var rn = (Math.random() * 6) + 1;
    rn = Math.floor(rn);
    return rn;
}
function declareWinner(winner){
    if(winner == 0){
        document.querySelector("h1").innerHTML = "Draw!"
    }
    else{
        document.querySelector("h1").innerHTML = "Player "+winner+" wins."
    }    
}
function changeImage(p1, p2){
    var path1 = "./assets/images/dice"+p1+".png";
    var path2 = "./assets/images/dice"+p2+".png";
    console.log(path1);
    console.log(path2);
    document.querySelector(".img1").setAttribute("src", path1);
    document.querySelector(".img2").setAttribute("src", path2);
    //now declare the winner 
    if(p1 > p2){
        declareWinner(1);
    }
    else if(p2 > p1){
        declareWinner(2);
    }
    else{
        declareWinner(0);
    }
}
function playGame(){
    var player1 = getRandomNumber(); 
    var player2 = getRandomNumber(); 
    changeImage(player1, player2);
}
function reset(){
    document.querySelector("h1").innerHTML = "Roll the Dice";
    var path = "./assets/images/dice"+6+".png";
    document.querySelector(".img1").setAttribute("src", path);
    document.querySelector(".img2").setAttribute("src", path);
}