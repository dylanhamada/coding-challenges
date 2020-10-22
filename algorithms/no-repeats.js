// CHALLENGE

/* Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique. */

// SOLUTION

/*
PLAIN LANGUAGE

- recursive function
- if current character index equals the length of the string (minus 1), store the string (in an array) and return
- otherwise, using a for loop, swap the character with itself and each subsequent character
- store the resulting string (in the array), move the character index forward 1, and call the recursive function on this resulting string
*/

const permAlone = str => {
    let permutations = [];

    const swapFunc = (arr, indOne, indTwo) => {
        let newArr = [...arr];
        let temp = newArr[indOne];

        newArr[indOne] = newArr[indTwo];
        newArr[indTwo] = temp;

        return newArr;
    };

    const recursiveFunc = (str, ind) => {
        let strArr = str.split('');

        if (ind === (strArr.length - 1)) {
            permutations.push(strArr);
            return;
        }

        for (let i = ind; i < strArr.length; i++) {
            let newArr = swapFunc(strArr, ind, i);
            permutations.push(newArr);
            
        }
    };
};