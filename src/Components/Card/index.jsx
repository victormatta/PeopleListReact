import "./styles.css"

export function Card(props){
    return(
        <div className="cardStyle">
            <strong>{props.name}</strong>
            <small>{props.date}</small>
        </div>
    )
}