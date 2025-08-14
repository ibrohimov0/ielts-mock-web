import "../ui/style.css"
import { useQuery } from "@tanstack/react-query"

export default function TestFetch() {
    const { data, error, isLoading } = useQuery(['tests'], GetTests);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="tests">
            tests
        </div>
    )
}