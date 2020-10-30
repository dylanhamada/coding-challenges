// Algorithm by Time Complexity Infinity: https://youtu.be/KukNnoN-SoY

const permute = (nums, set=[], answers=[]) => {
    // Base case: if the length of nums array is zero, push the set array into the answers array
    if (!nums.length) answers.push([...set]);

    // Iterate over the nums array i times, where i is the length of the nums array
    for (let i = 0; i < nums.length; i++) {
        // Filter out the current number in nums and store the new array in newNums
        const newNums = nums.filter((n, index) => index !== i);
        // Push the removed number into the set array
        set.push(nums[i]);
        /* Recursively call the permute function, passing in newNums as the number array, as well as the
        set and answers arrays  */
        permute(newNums, set, answers);
        // Remove the last number from the set array
        set.pop();
    }

    // Return the array of answers
    return answers;
};