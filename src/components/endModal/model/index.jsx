import Button from "../../../shared/ui/button"
import "../ui/style.css"

export default function EndModal({ answers, isOpen,setOpen }) {
    return (
        <div className="endModalBackground" style={{display: isOpen ? "flex": "none"}}>
            <div className="endModal">
                <h1>Results!</h1>
                <div className="totals">
                    <span>
                        <h3>True:</h3>
                        <p>3</p>
                    </span>
                    <span>
                        <h3>Wrong:</h3>
                        <p>27</p>
                    </span>
                </div>
                <p>15%</p>
                <div className="buttons">
                    <Button text="Show" backroundColor="purple" onClick={() => setOpen(false)}/>
                    <Button text="Retry" backroundColor="orange" onClick={() => window.location.reload()} />
                </div>
            </div>
        </div>
    )

}