# Coding Challenges

A repo to store JavaScript coding challenges.

## Introduction

To keep my JavaScript knowledge intact and learn new techniques, I've decided to maintain a repo of JS coding challenges.

These will primarily cover algorithms and data structures.

Challenges and their solutions are listed below, along with the relevant code. Please refer to the Table of Contents.

## Table of Contents

- [Coding Challenges](#coding-challenges)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Project Status](#project-status)
  - [Installation and Instructions](#installation-and-instructions)
  - [Algorithms Challenges](#algorithms-challenges)

## Project Status

This project is ongoing and is updated regularly.

## Installation and Instructions

All code is written in JavaScript and will run in the console.

**To install:**

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

**To run:**

Open a terminal and navigate to a folder that contains a challenge JS file. 

In the terminal, type `node challenge.js`, where "challenge.js" is the file name of the challenge.

The console will display the problem and solution to the challenge. 

Detailed information about the solution can be found within the JS file itself.

**Alternatively**, you can copy the function code, open the browser console, and paste the code. Then, call the function with your own arguments within a console.log call, like this:

`console.log(exerciseFunc(arguments));`

## Algorithms Challenges

<details>
    <summary>Symmetric Difference</summary>

> The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in 
either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

> Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an 
expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation 
at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

**Challenge**

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned 
array must contain only unique values (no duplicates).

**Solution**

My approach is to compare the first two arrays passed in as arguments, and push to a new array any elements that are present in either array but not in both.

I then call the sym function recursively, each time omitting the first two arrays passed in as arguments, until only one array is passed in as an argument, thereby being the symmetric difference.

**Code**

    const sym = (...args) => {
        if (args.length === 1) {
            return args[0];
        }

        const newArr = [];
        
        const checkDuplicate = (arrOne, arrTwo) => {
            arrOne.forEach(el => {
                if (!arrTwo.includes(el) && !newArr.includes(el)) {
                    newArr.push(el);
                }
            });
        };

        checkDuplicate(args[0], args[1]);
        checkDuplicate(args[1], args[0]);

        return sym(newArr, ...args.slice(2));
    };
</details>

<details>
    <summary>Inventory Update</summary>

**Challenge**

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

**Solution**

My approach is to iterate through the second array, each iteration also iterating through the first array. If the item names match, I increase the item quantity in array 1.

If the item name from the second array doesn't match, I add that item to array 1. Then I sort array 1 alphabetically.

**Code**

    const updateInventory = (arr1, arr2) => {
        arr2.forEach(arrTwoEl => {
            let newItem = true;

            arr1.forEach(arrOneEl => {
                if (arrOneEl[1] === arrTwoEl[1]) {
                    arrOneEl[0] += arrTwoEl[0];
                    newItem = false;
                }
            });

            if (newItem) {
                arr1.push(arrTwoEl);
            }
        });

        arr1.sort((a, b) => {
            if (a[1] < b[1]) {
                return -1;
            } else if (a[1] < b[1]) {
                return 1;
            }
            return 0;
        });

        return arr1;
    };
</details>

<details>
    <summary>No Repeats (Permutations of a String)</summary>

**Challenge**

Return the number of total permutations of the provided string that don't have repeated consecutive letters.

**Solution**

My approach is to recursively call a function on a string that swaps two characters in that string. Each recursion, the first character index to be swapped is moved forward one position, much the same way this problem is solved manually using a factorial tree.

When the last index has been reached in the recursive function, it ends.

There are three functions that make up the parent function. The most important is the recursive function that incrementally increases the index for character swapping.

The secondary function is a swapping function that takes a string and two indexes. The third function is one that checks for repeated consecutive characters.

**Code**

    const permAlone = str => {
        let allPermutations = [];
        let uniquePermutations = [];
        let noRepeats = 0;

        const swapFunc = (arr, indOne, indTwo) => {
            let newArr = [...arr];
            let temp = newArr[indOne];

            newArr[indOne] = newArr[indTwo];
            newArr[indTwo] = temp;

            return newArr;
        };

        const recursivePermute = (str, ind) => {
            let strArr = str.split('');

            if (ind === (strArr.length - 1)) {
                allPermutations.push(str);
                return;
            }

            for (let i = ind; i < strArr.length; i++) {
                let newArr = swapFunc(strArr, ind, i);
                let newStr = newArr.join('');
                allPermutations.push(newStr);
                recursivePermute(newStr, ind + 1);
            }
        };

        const checkRepeat = str => {
            let strArr = str.split('');
            let repeat = false;

            for (let i = 1; i < strArr.length; i++) {
                if (strArr[i] === strArr[i -1]) {
                    repeat = true;
                }
            }

            return repeat;
        };

        recursivePermute(str, 0);

        allPermutations.forEach((str, ind, arr) => {
            if (arr.indexOf(str) === ind) {
                uniquePermutations.push(str);
            }
        });

        uniquePermutations.forEach(str => {
            if (checkRepeat(str) === false) {
                noRepeats++;
            }
        });

        return noRepeats;
    };
</details>