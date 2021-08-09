/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (!height) return 0;
    //height = [1,8,6,2,5,4,8,3,7] -> 49
    //height = [4,3,2,1,4] -> 16 16, 9, 4, 1
    //height = [1, 1] -> 1
    //height = [1, 2, 1] -> 2
    
    
    let start = 0;
    let end = height.length - 1;
    let water_levels = [];
    
    while (start < end) {
        if (height[start] <= height[end]) {
            water_levels.push(height[start] * (end - start));
            start++;
        };
        
        if (height[start] > height[end]) {
            water_levels.push(height[end] * (end - start));
            end--;
        }
        
    }
    
    return Math.max(...water_levels);
};