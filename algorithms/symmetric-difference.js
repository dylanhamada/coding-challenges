/* The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in 
either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}. */

/* Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an 
expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation 
at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}. */

// CHALLENGE

/* Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned 
array must contain only unique values (no duplicates). */

// SOLUTION

const sym = (...args) => {
    // If the argument is only one array, symmetric difference found.
    if (args.length === 1) {
        return args[0];
    }

    // Create a new array to store symmetric difference.
    const newArr = [];
    
    /* Iterate through the first array, checking if the second array includes the current element in the first array. 
    If not, and if the new array doesn't already contain the current element, add the current element to the new array. */
    const checkDuplicate = (arrOne, arrTwo) => {
        arrOne.forEach(el => {
            if (!arrTwo.includes(el) && !newArr.includes(el)) {
                newArr.push(el);
            }
        });
    };

    // Check the first array for symmetric difference against the second, and vice versa.
    checkDuplicate(args[0], args[1]);
    checkDuplicate(args[1], args[0]);

    /* Recursively call the sym function, each time omitting the first two arrays passed in as arguments, until only
    one array is passed in as an argument, thereby being the symmetric difference. */
    return sym(newArr, ...args.slice(2));
};