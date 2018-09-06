    // User choice
    var userChoice = prompt("Please enter your name");

    	if (userChoice == "") {
            // User choice was undefined
            document.getElementById("demo").innerHTML = "Please enter your name to play!";
        }

        else {
            // Display user choice
            document.getElementById("demo").innerHTML = userChoice + " Welcome to Paper Scissors Rock game!";
        }


        var val = "";
        var random;
        var times = 0;
        var winp = 0.0;
        var winr = 0.0;
        var wins = 0.0;
        var type = document.getElementsByName("type");
        
        function play() 
        {
        	if(type[0].checked)
        	{
        		val = type[0].value;
        	}

        	else if(type[1].checked)
        	{
        		val = type[1].value;
        	}

        	else if(type[2].checked)
        	{
        		val = type[2].value;
        	}

        	if (val == "Rock" || val == "Paper" || val == "Scissors"){
        		var auto = ["Rock", "Paper", "Scissors"];
        		random = auto[Math.floor(Math.random() * 3)];
        		document.getElementById("computer").innerHTML = random;
        		document.getElementById("result").innerHTML = compare(val, random);
        		document.getElementById("history").innerHTML = "History: You have played total: " + times + " time(s)!";
        		document.getElementById("winPercent").innerHTML = "Wins Percentage: Method used/total amount of plays. Paper: " + (winp / times * 100).toFixed(2)
        		+ "% Scissors: " + (wins / times * 100).toFixed(2) + "% Rock: " + (winr / times * 100).toFixed(2) + "%";
        	}
        	else {
        		document.getElementById("computer").innerHTML = "Select an option!";
        	}
        }

        function compare(val, random){
        	times= times + 1;
        	if (val == random) {
        		return "It's a tie!";
        	}
        	if (val == "Rock") {
        		if (random == "Scissors") {
                    // rock wins
                    winr = winr + 1;
                    return "You win!";
                } else {
                    // paper wins
                    return "You lose! Try again.";
                }
            }
            if (val == "Paper") {
            	if (random == "Rock") {
            		winp = winp + 1;
                    // paper wins
                    return "You win!";
                } else {
                    // scissors wins
                    return "You lose! Try again.";
                }
            }
            if (val == "Scissors") {
            	if (random == "Rock") {
                    // rock wins
                    return "You lose! Try again.";
                } else {
                	wins = wins + 1;
                    // scissors wins
                    return "You win!";
                }
            }
        }

