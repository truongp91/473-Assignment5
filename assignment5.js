var http = require("http");
var url = require("url");

function requestHandler (request,response) {
	//Result of each game
	var result;

	
	//Generate random number for computer's move
	var random = Math.floor((Math.random() * 5) + 1);

	//Convert random number into random move
	if (random == 1) {
	    random = "rock";
	} else if (random == 2) {
	    random = "paper";
	} else if (random == 3) {
	    random = "scissors";
	} else if (random == 4) {
	    random = "lizard";
	} else if (random == 5) {
	    random = "spock";
	}

	var mymove = url.parse(request.url).pathname; 
	//rock scenarios
	if (mymove == '/play/rock' && random == 'rock' ) {
	    result = "tie";
	} else if (mymove == '/play/rock' && random == 'paper' ) {
	    result = "lose";
	} else if (mymove == '/play/rock' && random == 'scissors' ) {
	    result = "win";
	} else if (mymove == '/play/rock' && random == 'lizard' ) {
	    result = "win";
	} else if (mymove == '/play/rock' && random == 'spock' ) {
	    result = "lose";
	}else{
		result = "inconclusive"
	}

	//paper scenarios
	if (mymove == '/play/paper' && random == 'rock' ) {
	    result = "win";
	} else if (mymove == '/play/paper' && random == 'paper' ) {
	    result = "tie";
	} else if (mymove == '/play/paper' && random == 'scissors' ) {
	    result = "lose";
	} else if (mymove == '/play/paper' && random == 'lizard' ) {
	    result = "lose";
	} else if (mymove == '/play/paper' && random == 'spock' ) {
	    result = "win";
	}else{
		result = "inconclusive"
	}

	//scissors scenarios
	if (mymove == '/play/scissors' && random == 'rock' ) {
	    result = "lose";
	} else if (mymove == '/play/scissors' && random == 'paper' ) {
	    result = "win";
	} else if (mymove == '/play/scissors' && random == 'scissors' ) {
	    result = "tie";
	} else if (mymove == '/play/scissors' && random == 'lizard' ) {
	    result = "win";
	} else if (mymove == '/play/scissors' && random == 'spock' ) {
	    result = "lose";
	}else{
		result = "inconclusive"
	}

	//lizard scenarios
	if (mymove == '/play/lizard' && random == 'rock' ) {
	    result = "lose";
	} else if (mymove == '/play/lizard' && random == 'paper' ) {
	    result = "win";
	} else if (mymove == '/play/lizard' && random == 'scissors' ) {
	    result = "lose";
	} else if (mymove == '/play/lizard' && random == 'lizard' ) {
	    result = "tie";
	} else if (mymove == '/play/lizard' && random == 'spock' ) {
	    result = "win";
	}else{
		result = "inconclusive"
	}

	//spock scenarios
	if (mymove == '/play/spock' && random == 'rock' ) {
	    result = "win";
	} else if (mymove == '/play/spock' && random == 'paper' ) {
	    result = "lose";
	} else if (mymove == '/play/spock' && random == 'scissors' ) {
	    result = "win";
	} else if (mymove == '/play/spock' && random == 'lizard' ) {
	    result = "lose";
	} else if (mymove == '/play/spock' && random == 'spock' ) {
	    result = "tie";
	}else{
		result = "inconclusive"
	}

	//Display message
	var message = 'Computer plays ' + random + ', you play ' + mymove + ', result: ' + result;
        response.writeHead(200, {
                'Content-Type': 'text/plain',
                'Content-Length': message.length});
        response.end(message);
}


http.createServer(requestHandler).listen(3000
);