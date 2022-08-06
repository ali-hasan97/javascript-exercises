const sumAll = function(start, end) {
    if (typeof(start) && typeof(end) != 'number') {
        return 'ERROR';
    }
    if (start < 0 == true || end < 0 == true) {
        return 'ERROR';
    }
    if (start > end) {
        [start, end] = [end, start];
    }
    let result = 0n;
        for (let i = BigInt(start); i <= BigInt(end); i++) {
            result += i;
        }
    result = Number(result);
    return result;
};

// Do not edit below this line
module.exports = sumAll;
