export const CalculateAnswers = ({ answers, data }) => {
    let totalTrue = 0;
    let totalWrong = 0;
    const wrongAnswers = [];

    data.forEach(test => {
        const userChoiseIndex = answers[test._id]
        const correctIndex = test.options.findIndex(opt => opt.isCorrect)

        if (userChoiseIndex === correctIndex) {
            totalTrue++
        } else {
            totalWrong++
            wrongAnswers.push({
                question: test.question,
                correctAnswer: test.options[correctIndex].text,
                userAnswer: userChoiceIndex !== undefined ? test.options[userChoiceIndex].text : "No answer"
            })
        }
    });

    const percentage = ((totalTrue / data.length) * 100).toFixed(2);

    return { totalTrue, totalWrong, percentage, wrongAnswers };
}