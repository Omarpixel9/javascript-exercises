const palindromes = function (str) {
    // NOTE: should not consider punctuation
    const symbols = [',', '.', '?', '!', '<', '>', ':', ';', '|', '/', '[', ']', '(', ')'];
    symbols.forEach(element => (str = str.split(element).join('')));

    // NOTE: should not consider upper-case letters
    str = str.toLowerCase();

    // NOTE: should not consider any spaces, lol
    str = str.split(' ').join('');
    console.log(str);
    for (let first = 0; first < str.length / 2; first++) {
        let last = str.length - (first + 1);
        if (str[last] != str[first]) {
            return false;
        }
    }
    return true;
};

module.exports = palindromes;

