// CHALLENGE

/* Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique. */

// SOLUTION

const permAlone = str => {
    // Array to store all permutations of string
    let allPermutations = [];
    // Array to store all unique permutations of string
    let uniquePermutations = [];
    // Number of permutations without repeated consecutive letters
    let noRepeats = 0;

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
            allPermutations.push(str);
            return;
        }

        /* Starting with the current index, swap with each subsequent character position, push the new string
        to the permutations array, then call this function recursively, increasing the index by one each time */
        for (let i = ind; i < strArr.length; i++) {
            let newArr = swapFunc(strArr, ind, i);
            let newStr = newArr.join('');
            allPermutations.push(newStr);
            recursivePermute(newStr, ind + 1);
        }
    };

    // Check if a given string has repeated consecutive characters
    const checkRepeat = str => {
        let strArr = str.split('');
        let repeat = false;

        // Iterate through the string array, checking if the current character is the same as the previous one
        for (let i = 1; i < strArr.length; i++) {
            if (strArr[i] === strArr[i -1]) {
                repeat = true;
            }
        }

        return repeat;
    };

    // Make initial call to recursive function, passing the string and index zero
    recursivePermute(str, 0);

    // Iterate through all permutations, weeding out duplicates
    allPermutations.forEach((str, ind, arr) => {
        if (arr.indexOf(str) === ind) {
            uniquePermutations.push(str);
        }
    });

    // Iterate through all unique permutations and check for repeated consecutive characters
    uniquePermutations.forEach(str => {
        if (checkRepeat(str) === false) {
            noRepeats++;
        }
    });

    return noRepeats;
};

console.log(`String: "abc"`);
console.log(`Permutations without repeats: ${permAlone("abc")}`);
console.log(`String: "abcd"`);
console.log(`Permutations without repeats: ${permAlone("abcd")}`);
console.log(`String: "abcabc"`);
console.log(`Permutations without repeats: ${permAlone("abcabc")}`);