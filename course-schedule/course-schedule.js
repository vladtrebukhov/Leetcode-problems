/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) { 
    if (!prerequisites.length) return true;
    
    let prereqs_map = {};
    
    for (let i  = 0; i < prerequisites.length; i++) {
        let a = prerequisites[i][0];
        let b = prerequisites[i][1];
        
        if (!(a in prereqs_map)) {
            prereqs_map[a] = [b]
        } else {
            prereqs_map[a].push(b);
        }
    }

    let courses = Object.keys(prereqs_map); 
    let stack = [];

    for (let j = 0; j < courses.length; j++) {
        let checked = [];
        let course = courses[j];
        
        stack.push(prereqs_map[course])
        
        while (stack.length) {
            let prereqs = stack.pop();
            
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
