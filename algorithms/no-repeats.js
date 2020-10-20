// CHALLENGE

/* Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique. */

// SOLUTION

const permAlone = str => {
    /*
    PLAIN LANG

    - define a swap function
    - create a for loop that starts at 0, and runs x times, where s is the number of characters
    - each time the loop runs, it swaps the first char with the next one in sequence
    - however, the list of strings that results from this loop also has to run the swap func
    - but each successive run, the first x chars of the string are frozen

    - is there a way to do this recursively? what condition would we look for to terminate the recursion?
    */
};