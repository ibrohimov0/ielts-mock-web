import "../ui/style.css"

import { useState } from "react";
import { GetTests } from "../../../shared/api/getTests";
import { useQuery } from "@tanstack/react-query"
import EndModal from "../../endModal/model";
import Button from "../../../shared/ui/button";

export default function TestFetch() {
    const [answers, setAnswers] = useState({});
    const [isOpen, setOpen] = useState(false);

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
        setOpen(true)
    }
    return (
        <div className="tests">
            <EndModal isOpen={isOpen} setOpen={setOpen} answers={answers}/>
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
            <Button text="stop" backroundColor="red" onClick={handleSubmit} />
        </div>
    )
}