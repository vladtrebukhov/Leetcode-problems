/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //Loop through strs, take each individual string and sort it to be used as a key in a map
    //If key exists in map, push current string to the array that corresponds to the key
    //If key does not exist, create new array under that key with the current string
    //Return all values of map 
    
    let stringMap = {}; //{aet: ['eat', 'tea', 'ate'], ant: ['tan', 'nat'], abt: ['bat']}
    let result = [];
    
    for (let i = 0; i < strs.length; i++) {
        const sortedString = strs[i].split('').sort().join(''); //eat -> aet
        
        if (!(sortedString in stringMap)) {
            stringMap[sortedString] = [strs[i]];
        } else {
            stringMap[sortedString] = [...stringMap[sortedString], strs[i]];
        }
    }
    
    return Object.values(stringMap);
};