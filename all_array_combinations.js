/**
 * Task:
 *   There is an multidimensional array, for example:
 *   {
 *       'key1': [1, 2, 3],
 *       'key2': [4, 5]
 *   }
 *   The number of elements of the first and of the second levels can be arbitrary.
 *   Need to get all possible combinations of arrays, for instance for our array answer will be:
 *   [
 *       { key1: 1, key2: 4 },
 *       { key1: 1, key2: 5 },
 *       { key1: 2, key2: 4 },
 *       { key1: 2, key2: 5 },
 *       { key1: 3, key2: 4 },
 *       { key1: 3, key2: 5 }
 *   ]
 */


/**
 * @param array
 * @returns {Array} - array with all combinations
 */
function allArrayCombinations (array) {
    var currentArrayKey;
    var currentArray;
    var currentArrayLength;
    var resultArray = [];
    var resultArrayLength;
    var tempArray = [];
    var objectForExtending;
    var tempObject;
    var i;
    var j;

    for (currentArrayKey in array) {
        if (array.hasOwnProperty(currentArrayKey)) {
            currentArray = array[currentArrayKey];
            //first loop cycle
            if (resultArray.length === 0) {
                for (i = 0, currentArrayLength = currentArray.length; i < currentArrayLength; i++) {
                    tempObject = {};
                    tempObject[currentArrayKey] = currentArray[i];
                    resultArray.push(tempObject);
                }
            } else {
                for (j = 0, resultArrayLength = resultArray.length; j < resultArrayLength; j++) {
                    objectForExtending = resultArray[j];
                    
                    for (i = 0, currentArrayLength = currentArray.length; i < currentArrayLength; i++) {
                        //clone object by value
                        tempObject = JSON.parse(JSON.stringify(objectForExtending));
                        tempObject[currentArrayKey] = currentArray[i];

                        tempArray.push(tempObject);
                    }
                }

                //clone array by value
                resultArray = tempArray.slice();
                tempArray = [];
            }
        }
    }

    return resultArray;
}

var testArray = {
    'key1': [1, 2, 3],
    'key2': [4, 5],
    'key3': [7, 3, 8, 5],
    'key4': [4],
    'key5': [9, 0, 4, 2]
};

var allCombinations = allArrayCombinations(testArray);

console.log(allCombinations);
console.log(allCombinations.length);