/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //Sort intervals in ascending order by start
    
    intervals.sort((a,b) => a[0] - b[0]); //O(nlogn)
    
    //If curr end >= next start, merge
    //[[1,4], [2,3]]
    //[[1,3],[1,6],[8,10],[15,18]]
    //[[1,2], [3,4], [5,6], [6,6]] -> [[1,2], [3,4], [5,6]]
    //[[1,1], [1,1], [1,2], [4,7]] -> [[1,2], [4, 7]]
    
    //[[1,2], [1,3], [1,4],[1, 5]] -> [[1, 5]]
    
    let result = []; //[[1,6], [8, 10], []]
    
    for (let i = 1; i < intervals.length; i++) {
        let currStart = intervals[i][0];
        let currEnd = intervals[i][1];
        let prevStart = intervals[i-1][0];
        let prevEnd = intervals[i-1][1];
        
        if (currStart <= prevEnd) {
            intervals[i][0] = Math.min(currStart, prevStart);
            intervals[i][1] = Math.max(currEnd, prevEnd);
        } else {
            result.push(intervals[i-1]);
        }
    }
    
    result.push(intervals[intervals.length - 1]);
    
    return result;
};