//fetching two random numbers
var randomNumber1=(Math.random()*6)+1;
randomNumber1=(Math.floor(randomNumber1)); //rounds off to integer
var randomDiceImage="dice"+randomNumber1+".png"; //using concat dice_.png
var randomImageSource= "images/"+randomDiceImage; //images/dice_.png
var image1=document.querySelectorAll('img')[0]; //as it has two img tags we use [0]
image1.setAttribute("src", randomImageSource); //changes src according to the random number

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Changing the h1 according to which number is bigger in value.
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if (randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
