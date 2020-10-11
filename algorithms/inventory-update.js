// CHALLENGE

/* Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the 
new item and quantity into the inventory array. The returned inventory array should be in alphabetical 
order by item. */

// SOLUTION

/* Iterate through array 2, each time iterating through array 1 to check if the second element in the 
nested array of array 2 matches the one in array 1. Then...? */

const updateInventory = (arr1, arr2) => {
    arr2.forEach(arrTwoEl => {
        arr1.forEach(arrOneEl => {
            if (arrOneEl[1] === arrTwoEl[1]) {

            }
        });
    });
};

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);