function format(data,array,symbol="{}") {
    var newString = data;

    while (array.length > 0) {
        newString = newString.replace(symbol,array[0]);
        array.shift();
    }

    return newString
}

var start_time = new Date().getTime();
var sentence = "this is what you gotta write to test your wpm.";
var correct = 0;

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(format("{}\n", [sentence]), inp => {
	for (let i=0; i<sentence.length; i++) {
		try {
			if (inp[i] == sentence[i]) {
				correct += 1;
			}
		}
		
		catch (err) {
			break
		}
	}

    time = new Date().getTime();
    time_taken = (time-start_time)/1000
	
    console.log(format("WPM: {}", [inp.length*60/(5*time_taken)]));
    console.log(format("Accuracy: {}%", [(correct/sentence.length)*100]));

    readline.close();
})
