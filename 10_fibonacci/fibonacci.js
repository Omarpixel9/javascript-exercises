// The code used to get the result here is a little unnecessarily complicated
const fibonacci = function(num) {
    // Don't accept negative numbers
    if (num < 0) return "OOPS";

    // Parse strings into integers
    if (typeof(num) == 'string') num = Number.parseInt(num);

    // let first = 1;
    // let second = 1;
    // let sum = 0;

    // if (num === 1 || num === 2) return 1;
    
    // for (let i = 3; i <= num; i++) {
    //     sum += first + second;
    //     first = second;
    //     second = sum;
    //     if (i != num) {
    //         sum = 0;
    //     }
    // }
    // return sum;

    let f1 = 0;
    let f2 = 1;
    for (let i = 1; i < num; i++) {
        const temp = f2; // Store value of second term
        f2 = f1 + f2; // The next number is the sum of the second term and first term
        f1 = temp; // The first term now holds the value of the second one
    }
    return f2;
};

module.exports = fibonacci;
