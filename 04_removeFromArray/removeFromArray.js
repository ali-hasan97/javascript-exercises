const removeFromArray = function(array, ...remove) {
    // make sure your comparitors are === to account for type
    for (let x = 0; x < array.length; x++) {
        for (let i = 0; i < remove.length; i++) {
            if (array[x] === remove[i]) {
                array.splice(x, 1);
                x--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
