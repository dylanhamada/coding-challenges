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