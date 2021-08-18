const repeatString = function(myString, numOfRepeats) {
    // let repeats = 3;
    // let myString = "hey";

    // If negative number of repeats
    if (numOfRepeats < 0) {
        return "ERROR";
    }

    let result = "";
    for (let i = 0; i < numOfRepeats; i++) {
        result += myString;
    }
    return result;
};

module.exports = repeatString;
