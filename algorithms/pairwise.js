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

/*
PLAIN LANGUAGE
- create a variable 'sum' to store sum of indices
- run foreach on array
    - each iteration, run foreach on array except for current element
    - check if the two elements add up to the number 'arg'
    - if yes, add their indices to 'sum'
    - change their values to string 'used'
*/

const pairwise = (arr, arg) => {
    let sum = 0;
    
    return sum;
};