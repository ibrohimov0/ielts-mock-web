import "../ui/style.css"

import { useState } from "react";
import { GetTests } from "../../../shared/api/getTests";
import { useQuery } from "@tanstack/react-query"
import EndModal from "../../endModal/model";
import Button from "../../../shared/ui/button";
import { CalculateAnswers } from "../../../features/calculateAnswers";

export default function TestFetch() {
    const [answers, setAnswers] = useState({});
    const [isOpen, setOpen] = useState(false);
    const [results, setResults] = useState(null);

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
        const calc = CalculateAnswers({answers,data})
        setResults(calc)
        setOpen(true)
    }
    return (
        <div className="tests">
            <EndModal isOpen={isOpen} setOpen={setOpen} results={results}/>
            {data?.map((test, index) => (
                <div key={index} className="test">
                    <h2>{test.question}</h2>
                    {test.options.map((opt, i) => (
                        <label key={i}>
                            <input type="radio" name={`question-${index}`} value={index} checked={answers[test._id] === i} onChange={() => handleChange(test._id, i)} />
                            {opt.text}
                        </label>
                    ))}
                </div>
            ))}
            <Button text="stop" backroundColor="red" onClick={handleSubmit} />
        </div>
    )
}