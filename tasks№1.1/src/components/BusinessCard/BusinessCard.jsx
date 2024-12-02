import BusinessCardCss from "./BusinessCard.module.css"

function BusinessCard(props) {
    return (
        <div className={BusinessCardCss.card}>
            <h2>{props.company}</h2>
            <span>{props.jobTitle}</span>
            <span>{props.name}</span>
        </div>
    )
}
export default BusinessCard