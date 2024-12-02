import NewsCardCss from "./NewsCard.module.css"

function NewsCard(props) {
    return (
        <div className={NewsCardCss.card}>
                <div className={NewsCardCss.cont}>
                    <h2>{props.title}</h2>
                    <h3>{props.content}</h3>
                    <p>{props.date}</p>
                    <span>{props.author}</span>
                </div>
        </div>
    )
}

export default NewsCard