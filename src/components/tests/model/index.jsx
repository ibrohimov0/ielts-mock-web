import { GetTests } from "../../../shared/api/getTests";
import "../ui/style.css"
import { useQuery } from "@tanstack/react-query"

export default function TestFetch() {

    const { data, error, isLoading } = useQuery({
        queryKey: ['tests'],
        queryFn: GetTests,
    });
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="tests">
            {data?.map((test,index) => (
                <div key={index} className="test">
                    <h2>{test.question}</h2>
                    {test.options.map((opt,i) => (
                        <label key={i}>
                            <input type="radio" name={`question-${test._id}`} value={i} />
                            {opt.text}
                        </label>
                    ))}
                </div>
            ))}
        </div>
    )
}