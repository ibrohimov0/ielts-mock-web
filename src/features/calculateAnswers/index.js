export const CalculateAnswers = ({ answers, data }) => {
    let totalTrue = 0;
    let totalWrong = 0;
    const wrongAnswers = [];

    data.forEach(test => {
        const userChoiceIndex = answers[test._id]
        const correctIndex = test.options.findIndex(opt => opt.isCorrect)

        if (userChoiceIndex === correctIndex) {
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

    const percentage = ((totalTrue / data.length) * 100)

    return { totalTrue, totalWrong, percentage, wrongAnswers };
}