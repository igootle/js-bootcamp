// students score, totaal possible score
//15/20 -> You got a C (75%)!
// A 90-100, 80-89, 70-79, D 60-69, F 0-59

const gradeCalc = function(score, totalScore) {
    const PercentScore = (score/totalScore)*100
    let letterGrade = ''
    if (PercentScore>=90) {
        letterGrade = 'A'
    } else if (PercentScore>=80) {
        letterGrade = 'B'
    } else if (PercentScore>=70) {
        letterGrade = 'C'
    } else if (PercentScore>=60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return letterGrade
} 
let score = 79
let totalScore = 100
console.log(gradeCalc(score,totalScore))