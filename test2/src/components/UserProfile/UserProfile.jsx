import UserProfileC from "./UserProfile.module.css"

function UserProfile(props) {
    console.log(props);
    return (
        <div className={UserProfileC.card}>
            <h2>{props.name}</h2>
            <span>{props.age}</span>
            <img src={props.URL} className={UserProfileC.avatarURL}/>
        </div>
    )
}

export default UserProfile