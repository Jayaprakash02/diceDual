var randomNo = Math.round(Math.random() * 5 + 1);

var finalNo = randomNo;

var player1 = "./images/dice"+randomNo+".png"

var dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src",player1);
    

var randomNo1 = Math.round(Math.random() * 5 + 1);

var finalNo1 = randomNo1;

var player2 = "./images/dice"+randomNo1+".png"

var dice2 = document.querySelectorAll("img")[1];

dice2.setAttribute("src",player2);

if(randomNo > randomNo1){
    document.querySelector("h1").innerHTML="Player 1 WINS !"
}
else if(randomNo1 > randomNo){
    document.querySelector("h1").innerHTML="Player 2 WINS !"
}
else{
    document.querySelector("h1").innerHTML="Game Draw !"
}