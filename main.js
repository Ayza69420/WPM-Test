function format(data,array,symbol='{}') {
    var newString = data;

    while (array.length > 0) {
        newString = newString.replace(symbol,array[0]);
        array.shift();
    }

    return newString
}

var start_time = new Date().getTime();
var sentence = "this is the sentence you gotta write to test your speed".split(" ");
var correct = 0;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(format("{}\n", [sentence.join(" ")]), x => {
    for (let i=0; i<x.split(" ").length; i++) {
        if (x.split(" ")[i] == sentence[i]) {
            correct += 1;
        }    
    }

    time = new Date().getTime();
    
    console.log(format("WPM: {}", [correct/((time/1000-start_time/1000)/60)]));
    console.log(format("Accuracy: {}%", [Math.round((correct/sentence.length)*100)]));

    readline.close();
})
