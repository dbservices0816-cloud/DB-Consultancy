// Two Sum — Given an array and a target, find two indices whose values add up to the target.
// Topic: Array + HashMap




function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return null;

}
twoSum([2, 7, 11, 15], 9);

console.log(twoSum);






















