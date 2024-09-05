import InfoBlocC from "./InfoBlock.module.css"

function InfoBlock(props) {
    return (
        <div className={InfoBlocC.card}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <img src={props.URL} alt="" />
        </div>
    )
}

export default InfoBlock