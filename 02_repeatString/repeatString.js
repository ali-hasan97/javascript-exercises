const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    let final = ''
    for (let x=0; x < num; x++) {
        final += string;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
