/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) { 
    const freq_map = {};
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        freq_map[nums[i]] = freq_map[nums[i]] + 1 || 1;
    };
    
    let order_arr = [...Array(Math.max(...Object.values(freq_map)) + 1)].map(value => value = []);
    

    for (let key in freq_map) {
        if (freq_map.hasOwnProperty(key)) {
            order_arr[freq_map[key]].push(key);
        }
    }
    
    for (let j = order_arr.length - 1; j >= 0; j--) {
        for (let l = 0; l < order_arr[j].length; l++) {
            result.push(order_arr[j][l]);
            if (result.length === k) {
                return result;
            }
        }
    }
};