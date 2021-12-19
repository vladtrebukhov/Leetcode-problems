/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //If curr > next, swap, else keep iterating
    //Else while curr < prev, keep swapping curr with prev
    //Save start index as we'll be decrementing i. Once finished, reset i to initial i
    //O(n^2) -> Insertion Sort
//     let startIndex;
    
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] <= nums[i+1]) {
//             continue;
//         } else {
//             startIndex = i;
            
//             [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
            
//             while (nums[i-1] !== undefined && i >= 0 && nums[i] < nums[i-1]) {
//                 [nums[i], nums[i-1]] = [nums[i-1], nums[i]];
//                 i--;
//             }  
            
//             if (i !== startIndex) i = startIndex;
//         }
//     }
    
//     return nums;
    
    //O(nlogn) -> Quick sort
    //An element is sorted if all elements to the left are <= and all elements to the right are >= 
    //Pick first element as Pivot. left and right pointers move until left > pivot and right < pivot
    //Swap the elements
    //Continue until right is past left. Swap right with pivot
    //Run recursively from start to pivot and from pivot to end
                           
    //[5, 8, 7, 12, 12, 14, 15]
    
    //[1,2,3,5]
   
//     const partition = (left, right) => {
//         let pivot = nums[left];
        
//         let i = left;
//         let j = right;
        
//         while (i < j) {
//             while (nums[i] <= pivot) {
//                 i++;
//             }
            
//             while(nums[j] >= pivot) {
//                 j--;
//             }
            
//             if (i < j) {
//                 [nums[i], nums[j]] = [nums[j], nums[i]];
//             }
//         }
        
//         [nums[left], nums[j]] = [nums[j], nums[left]];
        
//         return j;
//     }
    

         
//     const quickSort = (left, right) => {
//         if (left < right) {
//             let mid = partition(left, right);
//             quickSort(left, mid);
//             quickSort(mid+1, right);
//         }
//         return nums;
//     }
    
//     return quickSort(0, nums.length - 1);
    
    return nums.sort((a,b) => a - b)
    
};