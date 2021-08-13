/**
 * @param {number[]} height
 * @return {number}
 */
//height = [1,8,6,2,5,4,8,3,7]
//49
var maxArea = function(height) {
    if (!height) return 0;
    
    //if first pointer smaller than second pointer, multiply distance between second and first times value at first pointer
    //then move first pointer up 1
    
    //if second pointer is smaller than first pointer, multiply distance between second and first times value at second pointer
    //then move second pointer down 1
    
    //each time check max area against current max
    
    let maxArea = 0;
    let start = 0;
    let end = height.length - 1;
    
    while (start < end) {
        let area;
        
        if (height[start] <= height[end]) {
            area = (height[start] * (end - start));
            start++;
        } else {
            area = (height[end] * (end - start));
            end--;
        }
        maxArea = Math.max(maxArea, area);
    }
    
    return maxArea; 
    
};