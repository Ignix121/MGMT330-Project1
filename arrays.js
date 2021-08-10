'using strict';
/**
 * @file Your description about what this file does here...
 * @author Prakat Bhatta <pbhatta@unm.edu>
 * @date 11/06/2020
 */

/**
 * This function counts the total number of rows in a 2D array
 * @function getNumberOfRows
 * @param {array} arr2D a 2D array
 */
 function getNumberOfRows(arr2D){
     let rowNum = arr2D.length;
     // this is all I need to write let len = arr2D.length;
    //  for (let i = 0; i < arr2D.length; i++) {
    //     rowNum = rowNum + 1;
    //  }
    return rowNum;
 }

/**
 * This function finds the number of columns of a 2D array,
 * @function getNumberOfColumns
 * @param {array} arr2D a 2D array
 */

 // works if I have equal number of elements in each row, 
 // incorrect if some have less elements
function getNumberOfColumns(arr2D){
    let colNum = arr2D[0].length;
    // let i = 0;
    // for (let i = 0; i < arr2D[0].length; i++) {
    //     colNum = colNum + 1;
    // }
    return colNum;
}


/**
 * This function finds the number of columns of a 2D array,
 * sometimes, some elements may be empty in 1 row and other rows might have more elements,
 * this program finds the max number of elements present in each row to determine the actual number of columns
 * say row 0 has 2 elements with 2 empty space but row 1 has all 4 elements, then still column number would be 4
 */

// function getNumberOfColumns(arr2D){
//     let count = 0;
//     for (let rows = 0; rows < arr2D.length; rows++) {
//         if (count < arr2D[rows].length){
//             count = arr2D[rows].length;
//         }
//     }
//     return count;
// }


/**
 * This function checks to see if the array has 1 or more Rows and also
 * whether number of rows = number of columns
 * 
 * @function checkArray
 * @param {array} arr2D a 2D array
 */
function checkArray(arr2D){
    let len = arr2D.length;
    if (len >= 1) {
        for (let i = 0; i < len; i++) {
            // at each loop, value of arr goes to 0 to store new element in new loop
            //let arr = 0;
            let arr = arr2D[i].length;
            if (arr != arr2D[0].length){
                return false;
            }
        }
    }
    return true;
}


/**
 * This function checks whether all the elements of an array are numbers
 * @function isAllNumbers
 * @param {array} arr2D a 2D array
 */
function isAllNumbers(arr2D) {
    for (let i = 0; i < arr2D.length; i++) {
        for (let j = 0; j < arr2D[i].length; j++) {

            //elements of the array are stored in num in each loop
            let num = arr2D[i][j];

            //if not a number, will return false
            if(isNaN(num)) {
                return false
            }
        }
    }
    return true;
}


/**
 * This function prints out a 2D array in a condensed form
 * @function printArray
 * @param {array} arr2D , a 2D array
 */
function printArray(arr2D) {
    if (checkArray(arr2D) === false) {
        return -1;
    } else {
        for (let i = 0; i < arr2D.length; i++) {
            for (let j = 0; j < arr2D[i].length; j++) {
                let elements = arr2D[i][j];
                process.stdout.write(`${elements}`);
                // process.stdout.write(elements.toString(36));
            }
            process.stdout.write('\n');
        } 
    }
    return 0;
}

/**
 * This function grows the given 2D array by the passed value of growth factor,
 * copying the values of the elements in both rows and columns
 * @function growArray
 * @param {*} arr2D , a 2D array
 * @param {*} growthFactor , number to increase the array size
 */
function growArray(arr2D, growthFactor) {

    let rowSize = arr2D.length;

    for (let i = 0; i < rowSize; i++) {
        let bigArray = arr2D[i];
        for (let j = 1; j < growthFactor; j++) {
            arr2D[i] = arr2D[i].concat(bigArray);
        }
    }
    for (let k = 1; k < growthFactor; k++) {
        for (let l = 0; l < rowSize; l++) {
            arr2D.push(arr2D[l]);
        }
    }
    return arr2D;
}

/**
 * This function computes the average of the neighboring elements to a number and 
 * puts it into respective index of the array and will have the same dimensions
 * @function avgOfNeighbors
 * @param {*} arr2D , a 2D array
 */
function avgOfNeighbors(arr2D) {
    let avgArray = [];
    let distances = [-1, 0, 1];


    for (let i = 0; i < arr2D.length; i++) {
        let newRow = [];
        
        for (let j = 0; j < arr2D[i].length; j++) {
        let nTotal = 0;
        let summation = 0;
        
        distances.forEach(d_i => {
            distances.forEach(d_j => {
                if ( (i + d_i) < 0 || (j + d_j) < 0 || (i + d_i) >= arr2D[i].length ||
                    (j + d_j) >= arr2D.length ) {
                } else {
                    summation += arr2D[i + d_i][j + d_j];
                    nTotal++;
                }
            });
        });
        let avgVal = parseFloat((summation/nTotal).toFixed(2));
        newRow.push(avgVal);
        }
    avgArray.push(newRow);
    }
    return avgArray;
}

/**
 * This function checks if the two 2D arrays passed are of the same dimensions
 * @function hasSameDimensions
 * @param {*} arr1 , a 2D array
 * @param {*} arr2 , a 2D array
 */
function hasSameDimensions(arr1, arr2) {
    let arr1Rows = arr1.length;
    let arr2Rows = arr2.length;

    if (arr1Rows !== arr2Rows) {
        return false;
    } else {
        for (let i = 0; i < arr1Rows; i++) {
            let arr1Len = arr1[i].length;
            let arr2Len = arr2[i].length;

            if (arr1Len !== arr2Len) {
                return false;
            } else {
                return true;
            }
        }
    }
}

/**
 * This function adds two 2D arrays of same dimensions and 
 * creates a new array of same dimension, if all the elements are numbers
 * @function addArrays
 * @param {*} arr1 , a 2D array
 * @param {*} arr2 , a 2D array
 */
function addArrays(arr1, arr2) {
    let sumArray = new Array (arr1.length);
    let emptyArray = [];
    let sum = 0;
    if ((hasSameDimensions(arr1, arr2) == true) &&
    (isAllNumbers(arr1) && (isAllNumbers(arr2)))) {
        
        for (i = 0; i < arr1.length; i++) {
            sumArray[i] = new Array(arr1[0].length);
            for (j = 0; j < arr1[0].length; j++) {
                sum = arr1[i][j] + arr2[i][j]; 
                sumArray[i][j] = sum;
            }
        }
        return sumArray;
    } else {
        return emptyArray;
    }
}

/**
 * This function takes a 1D array with specified width, height and channel
 * to create and return a 2D array and returns null if inputData is invalid
 * @function buildArray
 * @param {*} inputData , a 1D array
 * @param {*} width 
 * @param {*} height 
 * @param {*} channel 
 */
function buildArray(inputData, width, height, channel) {
    if((inputData!='' && inputData!=null && inputData!='undefined' && inputData.length>0)&&
    (width>=1) && (height>=1) && ((channel>=1) && (channel<=3))){
        let array1 = [];
        let group = [];
        //convert inputData array each string to individual values and push to array1
        for(let i=0;i<inputData.length;i++){
        let str = inputData[i].split(",");
        for(let j=0;j<str.length;j++){
        array1.push(str[j]);
        }
        }
        let length = array1.length;
        //loop to create 2D array from array1
        for(let k=0;k<length;k++){
        //array within array will be created
        if(!group.length || group[group.length-1].length == width){
        group.push([]);
        }
        //splice use to form array groups , defined width used as end index
        let array2 = array1.splice(0, width);
        group[group.length-1].push(array2[channel-1]); // push specified index value of array according to channel
        //if final 2D array row and column is equal to given width and height then exit from loop
        if(group.length && group.length == height && group[group.length-1].length == width){
        break;
        }
        }
        return group;
        }else{
        return [];
        }
}

/**
 * @function flipArray
 * This function flips the given 2D array horizontally and vertically
 * @param {*} arr2D , a 2D array
 */
function flipArray(arr2D) {
    let i, j;
    //flip the array horizontally
    for (i = 0, j = arr2D.length - 1; i < arr2D.length / 2; i++, j--) {
        let temp = arr2D[j];
        arr2D[j] = arr2D[i];
        arr2D[i] = temp;
    }
    //flip the array vertically
    for (i = 0; i < arr2D.length; i++) {
        for (j = 0, k = arr2D[0].length - 1; j < arr2D[0].length / 2; j++, k--) {
            let temp = arr2D[i][k];
            arr2D[i][k] = arr2D[i][j];
            arr2D[i][j] = temp;
        }
    }
    // console.log(arr2D);
    return arr2D;
}

/**
 * @function addFrame
 * This function creates a frame around the array
 * @param {*} arr2D , 2D array
 * @param {*} borderDistance 
 * @param {*} borderChar 
 */
function addFrame(arr2D, borderDistance, borderChar) {
    row = arr2D.length + (2*borderDistance);
    col = arr2D[0].length + 2;
    let origArray = new Array(row);
    for(let i = 0; i < row; i++) {
        origArray[i] = new Array(col);
    }

    // borderChar = borderChar.trim();
    // if (borderChar == null) {
    //     borderChar = '*';

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (i == 0 || i == row-1 || j == 0 || j == col-1) {
                    origArray[i][j] = borderChar;
                }
                for(let i = 0; i < row; i++) {
                    for(let j = 0; j < row; j++) {
                        if (i == 0 || i == row-1 || j == 0 || j == col-1) {
                            origArray[i][j] = borderChar;
                        } else if (i < borderDistance || i >= row-borderDistance) {
                            origArray[i][j] = ' ';
                        } else {
                            origArray[i][j] = arr2D[i-borderDistance][j-1];
                        }
                    }
                }
                return origArray;
            }
        }
    // }
}



module.exports.getNumberOfRows = getNumberOfRows;
module.exports.getNumberOfColumns = getNumberOfColumns;
module.exports.checkArray = checkArray;
module.exports.isAllNumbers = isAllNumbers;
module.exports.printArray = printArray;
module.exports.growArray = growArray;
module.exports.avgOfNeighbors = avgOfNeighbors;
module.exports.hasSameDimensions = hasSameDimensions;
module.exports.addArrays = addArrays;
module.exports.buildArray = buildArray;
module.exports.flipArray = flipArray;
module.exports.addFrame = addFrame;
// module.exports.copy = copy;