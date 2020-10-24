// CHALLENGE

/* Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique. */

// SOLUTION

const permAlone = str => {
    // Array to store all unique permutations of string
    let permutations = [];

    // Swap two elements in an array
    const swapFunc = (arr, indOne, indTwo) => {
        let newArr = [...arr];
        // Temporarily store the element at index indOne
        let temp = newArr[indOne];

        // Overwrite the element at index indOne with the element at indTwo
        newArr[indOne] = newArr[indTwo];
        // Overwrite the element at index indTwo with the temporarily stored element
        newArr[indTwo] = temp;

        return newArr;
    };

    // Recursively find all permutations
    const recursivePermute = (str, ind) => {
        let strArr = str.split('');

        // If index is last position in string, push the permutation to the array and return
        if (ind === (strArr.length - 1)) {
            permutations.push(str);
            return;
        }

        /* Starting with the current index, swap with each subsequent character position, then call this
        function recursively, increasing the index by one */
        for (let i = ind; i < strArr.length; i++) {
            let newArr = swapFunc(strArr, ind, i);
            let newStr = newArr.join('');
            if (permutations.includes(newStr)) {
                permutations.push(newStr);
            }
            recursivePermute(newStr, ind + 1);
        }
    };

    // Make initial call to recursive function, passing the string and index zero
    recursivePermute(str, 0);

    return permutations;
};

console.log(permAlone("abcd"));