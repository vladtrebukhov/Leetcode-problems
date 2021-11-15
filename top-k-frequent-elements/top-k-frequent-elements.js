/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) { 
    //Trivial answer with sorting -> O(nlogn) because sorting, O(1) space
    //Create map, sort map by highest value
    //Loop through map and return value where i + 1 = k
    
    //Heap -> O(klogn)
    //Create a frequency hash map from nums
    //Build a max heap of size k using key,values from map
    //While count < k, pop off k elements and return values in array
    
    //Bucket sort algorithm -> O(n) time, O(n) space
    //Create a frequency map from nums, create an array of arrays of length of map keys. 
    //Loop through map, use each value from map as index in array. Push each key from map at corresponding index
    //Loop through array from the back and return k number of values

    let map = {}
    
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
    }
    
    //{1:3, 2: 2, 3: 1, 4: 5}
    
    //->[3, 2, 1, 5]
    //->[null, null, null, null, null, null] -> need the + 1 because theres never gonna be a freq of 0
    //->[[],[],[],[],[],[]]
    
    let bucket = [...Array(Math.max(...Object.values(map)) + 1)].map(value => value = []);
    
    for (let key in map) {
        if (map.hasOwnProperty(key)) {
            bucket[map[key]].push(key);
        }
    }
    
    let result = [];
    
    for (let j = bucket.length - 1; j >= 0; j--) {
        for (let l = 0; l < bucket[j].length; l++) {
            result.push(bucket[j][l])
            if (result.length === k) {
                return result;
            }
        }
    }
};