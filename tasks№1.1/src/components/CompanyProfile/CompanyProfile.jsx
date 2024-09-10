import styles from "./CompanyProfile.module.css"

function CompanyProfile(props) {
    return (
        <div className={styles.card}>
            <h2>{props.name}</h2>
            <h2>{props.industry}</h2>
            <h2>{props.description}</h2>
            <h2>{props.location}</h2>
        </div>
    )
}

export default CompanyProfile