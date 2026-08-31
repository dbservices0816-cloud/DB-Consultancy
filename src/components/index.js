// Two Sum — Given an array and a target, find two indices whose values add up to the target.
// Topic: Array + HashMap




// function twoSum(nums, target) {
//     const numMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (numMap.has(complement)) {
//             return [numMap.get(complement), i];
//         }
//         numMap.set(nums[i], i);
//     }
//     return null;

// }
// twoSum([2, 7, 11, 15], 9);

// console.log(twoSum);



// Valid Parentheses — Check whether brackets (), {}, [] are properly balanced.
// Topic: Stack


// function isValid(s) {
//     const stack = [];
//     const map = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };
//     for (let char of s) {
//         if (map[char]) {
//             stack.push(char);
//         } else {
//             const last = stack.pop();
//             if (map[last] !== char) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }








class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next; // next node save karo

        curr.next = prev;     // pointer reverse karo

        prev = curr;          // prev ko aage move karo
        curr = next;          // curr ko aage move karo
    }

    return prev;
}