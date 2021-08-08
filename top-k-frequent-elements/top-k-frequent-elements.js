/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}; //{1: 3, 2: 2, 3: 1}
    
    nums.forEach((num, index) => {
        map[num] = map[num] + 1 || 1;
    });
    
    
    // [[], [1], [2], [1], [], []]
    const freq_arr = [...Array(nums.length + 1)].map(value => value = []);
    
    for (let key in map) {
        if (map.hasOwnProperty(key)) {
            freq_arr[map[key]].push(key);
        }
    };
    
    const result = [];
    
    for (let i = freq_arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < freq_arr[i].length; j++) {
            result.push(freq_arr[i][j]);
            if (result.length === k) {
                return result;
            }
        }
    }
};