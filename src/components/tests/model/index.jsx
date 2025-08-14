import "../ui/style.css"

import { useState } from "react";
import { GetTests } from "../../../shared/api/getTests";
import { useQuery } from "@tanstack/react-query"

export default function TestFetch() {
    const [answers, setAnswers] = useState({});

    const { data, error, isLoading } = useQuery({
        queryKey: ['tests'],
        queryFn: GetTests,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleChange = (testId, optionIndex) => {
        setAnswers(prev => ({ ...prev, [testId]: optionIndex }))
    }

    const handleSubmit = () => {
        console.log(answers);
    }
    return (
        <div className="tests">
            {data?.map((test, index) => (
                <div key={index} className="test">
                    <h2>{test.question}</h2>
                    {test.options.map((opt, i) => (
                        <label key={i}>
                            <input type="radio" name={`question-${index}`} value={index} checked={answers[index] === opt} onChange={() => handleChange(index, opt)} />
                            {opt.text}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>stop</button>
        </div>
    )
}