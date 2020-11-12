// CHALLENGE

/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum 
of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair 
should use the lowest possible available indices. Once an element has been used it cannot be reused 
to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 
at index 0 rather than the 1 at index 1, because 0+2 < 1+2.
*/

// SOLUTION

const prompt = require('../helpers/prompt');

const properties = [
    {
        name: 'array'
    },
    {
        name: 'argument'
    }
];

const pairwise = (arr, arg) => {
    let sum = 0;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Within the initial iteration, iterate through the array again
        for (let j = 0; j < arr.length; j++) {
            /* If the the sum of the initial element and the subsequent element equal "arg", and if neither
            of the elements are not falsy */
            if ((arr[j] + arr[i]) === arg && (arr[j] !== false) && (arr[i] !== false)) {
                // If the index of the initial element does not equal the index of the subsequent element
                if (i !== j) {
                    // Increase "sum" by the sum of the initial and subsequent elements
                    sum += (i + j);
                    // Set the initial and subsequent elements in the array to false so they can't be used again
                    arr[i] = false;
                    arr[j] = false;
                }
            }
        }
    }
    
    return sum;
};
