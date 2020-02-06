// students score, totaal possible score
//15/20 -> You got a C (75%)!
// A 90-100, 80-89, 70-79, D 60-69, F 0-59

let gradeCalc = function(score, totalScore) {
    PercentScore = (score/totalScore)*100
    if (PercentScore>=90) {
        grade = 'A'
    } else if (PercentScore>=80) {
        grade = 'B'
    } else if (PercentScore>=70) {
        grade = 'C'
    } else if (PercentScore>=60) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
} 
let score = 79
let totalScore = 100
console.log(gradeCalc(score,totalScore))