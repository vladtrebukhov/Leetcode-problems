/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3 || Math.min(...nums) > 0) return [];
    
    //Return all possible triplets of unique numbers that add up to 0, no duplicates
    //Sort numbers in ascending order
    //Loop through nums, and at each iteration have two pointers at i + 1 and end of nums
    //If nums[i+1] + nums[nums.length - 1] > target (0 - nums[i]), then move right pointer down 1
    //If less than, move right pointer up 1
    //If found 
    
    let result = []; //[[0, 0, 0],]
    
    //[-4, -1, -1, 0, 1, 2]
    //[0,0,0,0]
    
    nums = nums.sort((a,b) => a - b); //O(nlogn)
    
    for (let i = 0; i < nums.length - 2; i++) { //O(n^2)
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        
        const target = 0 - nums[i]; //0
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            if (nums[left] + nums[right] < target) {
                left++;
            } else if (nums[left] + nums[right] > target) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                
                while (nums[left] === nums[left - 1]) {
                    left++
                }
            }
        }
    }
    
    return result;
};