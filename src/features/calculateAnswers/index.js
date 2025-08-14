export const CalculateAnswers = ({answers,data}) => {
    let totalTrue,totalWrong
    console.log(answers);
    
    totalTrue = answers.filter(ans => ans.isCorrect === true).length
    totalWrong = data.length - totalTrue
    console.log(totalTrue,totalWrong);
}