/**
 * @file Mocha test suite for Project 1 assignment. This is not to be considered
 * complete coverage or a complete test suite. It will detect basic passing 
 * of the program. It is up to the student to ensure that their code meets
 * the specification as written.
 */

// Include assertion module for tests and Week 02 code to test against.
var assert = require('assert');
var wk = require('../modules/arrays.js');

// 
// describe() is simply a way to group our tests in Mocha. We can nest our 
// tests in groups as deep as we deem necessary. describe() takes two 
// arguments, the first is the name of the test group, and the second 
// is a callback function.
// 
//        +-- Name of the test group
//        |                +------------------ Callback function.
//        v                v
describe('Variables...', function() {
    //                 +-- Name of the test group
    //                 |                   +----- Callback function.
    //                 v                   v
    describe('Testing declarations...', function() {
        // 
        // it() is used for an individual test case. it() should be written 
        // as if you were saying it out loud: “It should equal zero”, “It 
        // should log the user in”, etc. it() takes two argument    s, a 
        // string explaining what the test should do, and a callback function 
        // which contains our actual test:
        // 
        // getNumberOfRows
        let myArray = [
            [1,2,3,4],
            [5,6,7,8],
            [9,0,1,2],
            [3,4,5,6]
        ];
        it('getNumberOfRows exists...', function(){
            assert.ok(typeof wk.getNumberOfRows === 'function');
        });
        // getNumberOfColumns
        it('getNumberOfColumns exists...', function(){
            assert.ok(typeof wk.getNumberOfColumns === 'function');
        });
        // checkArray
        it('checkArray exists...', function(){
            assert.ok(typeof wk.checkArray === 'function');
        });
        // isAllNumbers
        it('isAllNumbers exists...', function(){
            assert.ok(typeof wk.isAllNumbers === 'function');
        });
        // printArray
        it('printArray exists...', function(){
            assert.ok(typeof wk.printArray === 'function');
        });
        // growArray
        it('growArray exists...', function(){
            assert.ok(typeof wk.growArray === 'function');
        });
        // avgOfNeighbors
        it('avgOfNeighbors exists...', function(){
            assert.ok(typeof wk.avgOfNeighbors === 'function');
        });
        // hasSameDimensions
        it('hasSameDimensions exists...', function(){
            assert.ok(typeof wk.hasSameDimensions === 'function');
        });
        // addArrays
        it('addArrays exists...', function(){
            assert.ok(typeof wk.addArrays === 'function');
        });
        // addFrame
        it('addFrame exists...', function(){
            assert.ok(typeof wk.addFrame === 'function');
        });
        
    });
    
});