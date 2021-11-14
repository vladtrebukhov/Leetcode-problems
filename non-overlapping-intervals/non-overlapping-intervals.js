/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    //Sort by starting value, loop keeping track of end at each interval
    //If you find an interval where start < previous end, increment result
    //Each iteration update the end with current valid intervals found
    
    intervals.sort((a,b) => a[1] - b[1]);

    let result = 0;
    let valid_end = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];
        
        start < valid_end ? result++ : valid_end = end;
    };
    
    return result;
};