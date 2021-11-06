/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    //To find max area, we must maximize length * height
    //Given different heights and their distance from each other, we want the distance from left and right to be as large as possible, while making the height as large as possible. 
    //At points left and right, the height must be the lower number
    
    //Start with two pointers, left = 0, right = height.length - 1
    //while left <= right, keep moving pointer depending on which is taller calculating maxArea each iteration 
    
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    
    //[1,8,6,2,5,4,8,3,7]
    
    while (left <= right) {
        let length = right - left; //7
        let hgt = Math.min(height[left], height[right]); //8, 7 -> 7
        maxArea = Math.max(hgt * length, maxArea);
        height[left] < height[right] ? left++ : right--;
    }
    
    return maxArea;
};