

function getAverage (scores) {
    let sum = 0;
    for (let value of scores){
        sum += value;
        
    }
    let average = sum / scores.length;
    return average;

}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));



function getGrade (score) {
    if (score === 100) {
        return "A++";
        
    }else if (score >= 90){
        return "A";
        
    }else if (score >= 80){
        return "B";
        
    }else if (score >= 70){
        return "C";
        
    }else if (score >= 60){
        return "D";
        
    }else {
        return "F";
        
    }
    
}
console.log(getGrade(100));
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

/*
function hasPassingGrade (score) {
    return getGrade(score) !== "F";
}
*/

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(96));
console.log(hasPassingGrade(82));
console.log(hasPassingGrade(56));



function hasPassingGrade (score) {
    if (score === 100) {
        return true;
        
    }else if (score >= 90){
        return true;
        
    }else if (score >= 80){
        return true;
        
    }else if (score >= 70){
        return true;
        
    }else if (score >= 60){
        return true;
        
    }else {
        return false;
        
    }
    
}
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(96));
console.log(hasPassingGrade(82));
console.log(hasPassingGrade(56));



function studentMsg (totalScores, studentScore) {
    let average = getAverage(totalScores);
    let grade = getGrade(studentScore);

    if (grade === "F") {
        return "Class average: " + average + "." +" Your grade: " + grade + "."  + " You failed the course.";
    }else {
        return "Class average: " + average + "." +" Your grade: " + grade + "."  + " You passed the course.";
    }
}


/*
function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores);
    let grade = getGrade(studentScore);
  
    return `Class average: ${average}. Your grade: ${grade}. You ${
      hasPassingGrade(studentScore) ? "passed" : "failed"
    } the course.`;
  }
*/
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));