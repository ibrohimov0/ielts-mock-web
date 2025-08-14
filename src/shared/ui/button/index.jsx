import "./style.css"

export default function Button({text,backroundColor,onClick}){
    return(
        <button className="button" style={{backgroundColor:backroundColor}} onClick={onClick}>{text}</button>
    )
}