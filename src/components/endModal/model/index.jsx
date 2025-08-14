import Button from "../../../shared/ui/button"
import "../ui/style.css"

export default function EndModal({ results, isOpen, setOpen }) {
    if (!results) return null;
    return (
        <div className="endModalBackground" style={{ display: isOpen ? "flex" : "none" }}>
            <div className="endModal">
                <h1>Results!</h1>
                <div className="totals">
                    <span>
                        <h3>True:</h3>
                        <p>{results.totalTrue}</p>
                    </span>
                    <span>
                        <h3>Wrong:</h3>
                        <p>{results.totalWrong}</p>
                    </span>
                </div>
                <p>{results.percentage}%</p>
                <div className="buttons">
                    <Button text="Show" backroundColor="purple" onClick={() => alert(JSON.stringify(results.wrongAnswers, null, 2))} />
                    <Button text="Retry" backroundColor="orange" onClick={() => window.location.reload()} />
                </div>
            </div>
        </div>
    )

}