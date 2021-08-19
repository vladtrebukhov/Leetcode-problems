/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    
    let end = intervals[0][1]; //8
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= end) {
            end = Math.max(end, intervals[i][1]);
            intervals[i] = [intervals[i-1][0], end];
            intervals.splice(i-1, 1);
            i--;
        } else {
            end = intervals[i][1];
        } 
    }
    
    return intervals;

};