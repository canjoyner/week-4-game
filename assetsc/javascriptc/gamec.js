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
		goalNum = "";
		buttonNum1 = "";
		buttonNum2 = "";
		buttonNum3 = "";
		buttonNum4 = "";
		score = "";

		$("#scoreSpot #goal").empty();
	}

function numPick(){
	 goalNum = Math.floor(Math.random() * 120)+19;

	 buttonNum1 = Math.floor(Math.random() * 12)+1;
	 buttonNum2 = Math.floor(Math.random() * 12)+1;
	 buttonNum3 = Math.floor(Math.random() * 12)+1;
	 buttonNum4 = Math.floor(Math.random() * 12)+1;

	 score = 0;
}

	var goalNum = Math.floor(Math.random() * 50)+19;

	var buttonNum1 = Math.floor(Math.random() * 12)+1;
	var buttonNum2 = Math.floor(Math.random() * 12)+1;
	var buttonNum3 = Math.floor(Math.random() * 12)+1;
	var buttonNum4 = Math.floor(Math.random() * 12)+1;

	 score = 0;


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
 	// numPick();
   if (score < goalNum){
    console.log ("keep going");

  }
  else if (score > goalNum){
    console.log ("you loose");
    losses = losses +1 ;
    score = 0;
    numPick();
  }
  else {
    console.log("you win")
    wins = wins +1;

    numPick();
  }

goal.innerHTML = goalNum;
timesWon.innerHTML = wins;
timesLoss.innerHTML = losses
console.log(goalNum)
console.log(buttonNum1)
console.log(score)
}







 	// timesWon.innerHTML(wins++);
;








})