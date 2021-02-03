// 1/28/2021 Troll Game Project

// Definition of the trollGame() function which runs the game 
function trollBattle() {
	// Initial prompt for the user which gets stores in a variable
	var action = window.prompt("You're walking through the forest minding your own business and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();


	// Switch statement to handle the initial players choice
	switch(action) {
		case "FIGHT":
			var skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
			var strong = window.prompt("Are you stronger than the troll? (YES or NO)").toUpperCase();
			// IF statement that anylzes the user's response
// write the positve result to the document
			if(skill === "YES" || strong === "YES") {
				// the users responed yes to at least one of those prompts
				// write postive result
				document.getElementById('result').innerHTML = "You can be either stronger or more skilled than a troll to survive!<br/>You live another day!";
				document.getElementById("death").innerHTML = "";
				//play the winning audio file
				document.getElementById("win").play();
			} else {
				// the user respondded NO to both of the prompts
// write the negative result to the document
				document.getElementById("death").innerHTML = "You're not skilled or stong? Why did you fight the troll?<br/>You have died!";
				// clear any positive message from the document
				document.getElementById("result").innerHTML = "";
				// play the losing audio file
				document.getElementById("lose").play();
			}
			break;

					

		case "RUN": {
			var fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
			// If statement  that analyzes the user's response
			if (fast === "YES") {
				// write the positive result to the document 
				document.getElementById("result").innerHTML = "Your speed has allowed you to survive!<br/>But can you live with your cowardice?";
				// clear any losing messages from the document
				document.getElementById("death").innerHTML = "";
				// play the winning audio file 
				document.getElementById("win").play();
			} else {
				// write the negative result to the document 
				document.getElementById("death").innerHTML = "You coward! If you're going to run, at least be fast!<br/>You have died...";
				// clear any positive message from the document
				document.getElementById("result").innerHTML = "";
				// play the losing audio file
				document.getElementById("lose").play();
			}
			break;
		}
		
		case "BRIBE": {
			var money = window.prompt("You have to pay the trolll-toll.\nDo you have any money? (YES or NO)").toUpperCase(); 
			// If statement that checks the value of the money variable. If they say yes continue asking how much
		if(money === "YES") {
		   	var amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC VALUE.").toUpperCase();
			// convert the string you get from the prompt to an integer
			amount = parseInt(amount);
			// check to see if the amount is enough to survive
			if(amount > 50) {
				// write the positive result to the document 
				document.getElementById("result").innerHTML = "Great job! The troll is happy.<br/>You can pass with your life!";
				// clear any losing messages from the document
				document.getElementById("death").innerHTML = "";
				// play the winning audio file 
				document.getElementById("win").play();
			} else {
			// you dont have enough money and you lose
			// write the negative result to the document 
			document.getElementById("death").innerHTML = "The troll needs more money than that to let you pass!<br/>You have died...";
			// clear any positive message from the document
			document.getElementById("result").innerHTML = "";
			// play the losing audio file
			document.getElementById("lose").play();
			}	 
		} else {
			// you said NO to having money, you lose
			// write the negative result to the document 
			document.getElementById("death").innerHTML = "What were you going to bribe with, your looks/<br/>You have died...";
			// clear any positive message from the document
			document.getElementById("result").innerHTML = "";
			// play the losing audio file
			document.getElementById("lose").play();
		}	
		break;
	}

		

		default: {
			// the user has NOT entered a valid choice to the initial prompt
			window.alert("You entered: + "+ action +". Not a valid choice, please try again!");
			trollBattle();
				break;
		}

	
	} // end of switch
}