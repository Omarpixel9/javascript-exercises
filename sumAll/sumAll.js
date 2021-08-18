const sumAll = function (num1, num2) {
    // Inclusive of initial and final
    let sum = 0;
    let initial, final;

    // Check for negative numbers errors
    if (num1 < 0 || num2 < 0) return "ERROR";
    // Check for correct parameter type errors
    if ((typeof(num1) != "number") || (typeof(num2) != "number")) return "ERROR";

    // Find out the smaller/larger of the two
    if (num1 < num2) {
        initial = num1;
        final = num2;
    } else {
        initial = num2;
        final = num1;
    }

    // Iterate from i to f (inclusive)
    for (let i = initial; i <= final; i++) {
        sum = sum + i;
    }
    return sum;
};

module.exports = sumAll;