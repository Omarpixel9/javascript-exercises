const removeFromArray = function () {
    // Store arguments into variables
    let myArray = arguments[0];
    let elementsToBeRemoved = [];
    for (let index = 1; index < arguments.length; index++) {
        elementsToBeRemoved.push(arguments[index]);
    }
    //return elementsToBeRemoved[0];

    // Iterate over each to be removed element and search for it in the original array
    for (let index = 0; index < elementsToBeRemoved.length; index++) {
        let element = elementsToBeRemoved[index];
        let indexOfRemoved = -1;
        for (let j = 0; j < myArray.length; j++) {
            if (myArray[j] === element) {
                indexOfRemoved = j;
                break;
            }
        }
        if (indexOfRemoved != -1) {
            // Found, remove from original array
            myArray.splice(indexOfRemoved, 1);
            
        }
        
    }

    return myArray;


};

module.exports = removeFromArray;