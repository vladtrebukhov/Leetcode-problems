/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //1, [] -> true
    //2, [[1,0]] -> true
    //3, [[1,0],[1,2],[2,1] -> false
    //6, [[1,0], [2,1], [3,2], [4,3]] -> true, 
    //3, [[0,1],[2,0],[1,2]] -> false, no way to take course 1
    //4, [[0,1],[1,2],[3,2]] -> true
    
    if (!prerequisites.length) return true;
    
    //make map of pre-reqs
    
    let prereqs_map = {}; //{1: [0,2], 2: [1]}
    
    for (let i  = 0; i < prerequisites.length; i++) {
        let a = prerequisites[i][0];
        let b = prerequisites[i][1];
        if (!(a in prereqs_map)) {
            prereqs_map[a] = [b]
        } else {
            prereqs_map[a].push(b);
        }
    }

    let courses = Object.keys(prereqs_map); //[0, 1, 3]
    let stack = []; //[]

    for (let j = 0; j < courses.length; j++) {
        let checked = [];
        let course = courses[j];
        
        stack.push(prereqs_map[course])
        
        while (stack.length) {
            let prereqs = stack.pop();  //[1,2]
            
            for (let i = 0; i < prereqs.length; i++) {
                let prereq = prereqs[i];
                
                if (prereq == course) {
                    return false;
                }
                
                if (prereq in prereqs_map && !checked.includes(prereq)) {
                    stack.push(prereqs_map[prereq]);
                    checked.push(prereq);
                }
            }
        }
    }
    
    return true;
};