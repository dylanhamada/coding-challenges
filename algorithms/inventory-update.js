// CHALLENGE

/* Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the 
new item and quantity into the inventory array. The returned inventory array should be in alphabetical 
order by item. */

// SOLUTION

const updateInventory = (arr1, arr2) => {
    // Iterate through array 2
    arr2.forEach(arrTwoEl => {
        // Variable to denote whether an item in array 2 is present in array 1
        let newItem = true;

        // Iterate through array 1
        arr1.forEach(arrOneEl => {
            /* If the item names of the current elements in both arrays match, increase the quantity
            in array 1 by quantity in array 2 */
            if (arrOneEl[1] === arrTwoEl[1]) {
                arrOneEl[0] += arrTwoEl[0];
                newItem = false;
            }
        });

        // If item in array 2 is not present in array 1, add the item to array 1
        if (newItem) {
            arr1.push(arrTwoEl);
        }
    });

    // Sort array 1 alphabetically by item name
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

console.log(`Array 1:`);
console.log(curInv);
console.log(`Array 2:`);
console.log(newInv);
console.log(`Updated inventory:`);
console.log(updateInventory(curInv, newInv));