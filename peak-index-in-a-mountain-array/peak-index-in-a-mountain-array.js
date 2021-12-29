/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
//     Trivial O(n)
//     for (let i = 1; i < arr.length-1; i++) {
//         if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) return i;
//     }
    
//     Binary search (log(n)) -> read problem statement carefully to understand valid input for Bin Search to work
    
    let start = 0;
    let end = arr.length - 1;
    
    if (arr[2] < arr[1]) return 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2); 
        
        if (arr[mid+1] !== undefined &&
            arr[mid-1] !== undefined &&
            arr[mid] > arr[mid+1] && arr[mid] > arr[mid-1]) {
            return mid;
        } else if (arr[mid] >= arr[mid-1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
};
