import MovieCardCss from "./MovieCard.module.css"

function MovieCard(props) {
    return (
        <div className={MovieCardCss.card}>
            <img src={props.posterUrl} alt="" />
            <h2>{props.title}</h2>
            <p>{props.year}</p>
            <span>{props.director}</span>
        </div>
    )
}

export default MovieCard