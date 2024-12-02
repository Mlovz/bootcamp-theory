import styles from "./ImageGallery.module.css"

function ImageGallery(props) {
    return (
        <div className={styles.card}>
            {
                props.images.map((i) => {
                    return (
                        <img src={i} />
                    )
                })
            }
        </div>
    )
}

export default ImageGallery