'using strict';
/**
 * @file Your description about what this file does here...
 * @author PRAKAT BHATTA <pbhatta@unm.edu>
 */

const arrays = require('./modules/arrays.js');
const fs = require('fs');
const contents = fs.readFileSync('./wnba-scores.csv', 'utf8');


// 
// YOUR CODE GOES BELOW THIS LINE
// 

let myArray = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],

];

let testArray1 = [
    ['#', '@', 'A', 'b'],
    [0, 1, '!', 'x'],
    ['b', '*', '*', 'W'],
];

let testArray2 = [
    [1, 2, 3],
    [4, 5, 6], 
];

// console.log(myArray.length);

let numRows = arrays.getNumberOfRows(myArray);
console.log({numRows});

let numCols = arrays.getNumberOfColumns(myArray);
console.log({numCols});

console.log('test array row and cols:');
console.log(arrays.getNumberOfRows(testArray1));
console.log(arrays.getNumberOfColumns(testArray1));

console.log(arrays.checkArray(myArray));

console.log();
console.log(arrays.isAllNumbers(myArray));

arrays.printArray(testArray1);

console.log(arrays.growArray(testArray2, 2));

let testArray3 = [
    [1, 2, 3],
    [3, 4, 6],
    [4, 5, 7],
];


// let newArray = [];
// for (let k = 0; k < testArray2.length; k++) {
//     for (let l = 0; l < testArray2[k].length; l++) {
//         newArray.push(testArray2.slice());
//         // console.log('\n');
//     } 
// }
// console.log(newArray);


// console.log(testArray2);

console.log(testArray3.length);
// console.log(testArray3.concat(testArray3));


// let avgArray = [
//     [10,2,3,40],
//     [50,6,7,80],
//     [90,10,11,120],
//     [130,14,15,160]
// ];

let avgArray = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 0, 1, 2],
    [3, 4, 5, 6, 7, 8],
    [9, 0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 0],
    [1, 2, 3, 4, 5, 6]
];

console.table(arrays.avgOfNeighbors(avgArray));


let tArr1 = [
    [1, 2, 3],
    [4, 5, 6],
    // [1, 2, 3]
];

let tArr2 = [
    [1, 2, 5],
    [3, 4, 7],
];
console.log(arrays.hasSameDimensions(tArr1, tArr2));
// console.log(tArr1.length);
// console.log(tArr2.length);

console.log(arrays.addArrays(tArr1, tArr2));

let inputData = [
    '12,13,14,15,16,17,18,19,20',
    '1,2,3,4,5,6,7,8,9',
    '10,20,30,40,50,60,70,80,90'
    ];
    let width = 3;
    let height = 3;
    let channel = 2;
    console.log(arrays.buildArray(inputData,width,height,channel));

let newArr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
];
console.log(newArr.length);
// let neW = newport.reverse();
// console.table(newport.reverse());

console.log(arrays.flipArray(newArr));

let arrFrame = arrays.addFrame(myArray, 3, '^')
for (let i of arrFrame) {

    // join() returns the passed string
    console.log(i.join(''))
}
// console.log(arrays.addFrame(newport, 3, '^'));


let rows = contents.split(/\r\n|\n/);
let dataArray = [];

rows.forEach(row => {
    let record = row.split(',');
    dataArray.push(record);
});
// console.log(dataArray);

dataArray.shift();

let teamPTS = new Object ();

let count1 = 0;
let count2 = 0;
let winner;

for (let i =0; i < dataArray.length; i++) {
    let team1 = dataArray[i][1];
    let team2 = dataArray[i][3];

    if (dataArray[i][2] > dataArray[i][3]) {
        count1 += 1;
    } else {
        count2 += 1;
    }
    if (count1 > count2){
        winner = team1;
    } else {
        winner = team2;
    }
    if (team1 in teamPTS) {
        teamPTS[team1] += parseInt(dataArray[i][2]);
    } else {
        teamPTS[team1] = parseInt(dataArray[i][2]);
    }

    if (team2 in teamPTS) {
        teamPTS[team2] += parseInt(dataArray[i][4]);
    } else {
        teamPTS[team2] = parseInt(dataArray[i][4]);
    }
}
console.log(`teams with most wins ${winner}`);
// console.log(teamPTS);


let mostPTS = ' ';
let maxPTS = 0;
for (team in teamPTS) {
    if (teamPTS[team] > maxPTS) {
        maxPTS = teamPTS[team];
        mostPTS = team;
    }
}
console.log(`teams with maximum points ${mostPTS}`);