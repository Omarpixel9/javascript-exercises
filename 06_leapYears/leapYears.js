const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        // Divisible by 4 AND not divisible by 100
        return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
        // Divisible by 100 AND Divisible by 400
        return true;
    } else {
        return false;
    }
};

module.exports = leapYears;
