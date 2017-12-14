$(document).ready(function() {
// decalare Variables

var goalNum;
var buttonNum1;
var buttonNum2;
var buttonNum3;
var buttonNum4;
var score;
var wins = 0;
var losses = 0;

	function initialize(){
		var goalNum = "";
		var buttonNum1 = "";
		var buttonNum2 = "";
		var buttonNum3 = "";
		var buttonNum4 = "";
		var score = "";

		// $("#scoreSpot #goal").empty();
	}


var goalNum = Math.floor(Math.random() * 50)+19;

var buttonNum1 = Math.floor(Math.random() * 12)+1;
var buttonNum2 = Math.floor(Math.random() * 12)+1;
var buttonNum3 = Math.floor(Math.random() * 12)+1;
var buttonNum4 = Math.floor(Math.random() * 12)+1;

var score = 0;





$("#picture1").on("click",function(){
score = score + buttonNum1;
scoreSpot.innerHTML = score;
})

$("#picture2").on("click",function(){
score = score + buttonNum2;
scoreSpot.innerHTML = score;
})

$("#picture3").on("click",function(){
score = score + buttonNum3;
scoreSpot.innerHTML = score;
})

$("#picture4").on("click",function(){
score = score + buttonNum4;
scoreSpot.innerHTML = score;
})



 document.onclick = function(){
   if (score < goalNum){
    console.log ("keep going");
  }
  else if (score > goalNum){
    console.log ("you loose");
    losses = losses +1 ;
    initialize(this)
  }
  else {
    console.log("you win")
    wins = wins +1;
    initialize(this)
  }

goal.innerHTML = goalNum;
timesWon.innerHTML = wins;
timesLoss.innerHTML = losses
console.log(goalNum)
console.log(buttonNum1)
console.log(score)
console.log("he he he ")
}







 	// timesWon.innerHTML(wins++);
;








})