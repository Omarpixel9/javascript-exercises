const reverseString = function(str) {
    // Much more readable solution:
    let strAsArray = str.split("");
    let reversedArray = strAsArray.reverse();
    let reverseStr = reversedArray.join("");

    // Alternative solution using decrementing loop
    /*
    let reverseStr = "";
    for (let index = str.length - 1; index >= 0; index--) {
        reverseStr += str[index];
    }*/

    return reverseStr;
};

module.exports = reverseString;
