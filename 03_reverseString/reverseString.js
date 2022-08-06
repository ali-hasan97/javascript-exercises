const reverseString = function(string) {
    let reversed = '';
    let length = string.length;
    let i = -1;
    for (x = 0; x < length; x++) {
        reversed += string.substr(i,1);
        i--;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
