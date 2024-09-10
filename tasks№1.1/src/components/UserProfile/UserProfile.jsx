import UserProfileCss from "./UserProfile.module.css"

function UserProfile(props) {
    return (
        <div className={UserProfileCss.card}>
            <h2>firstName: {props.firstName}</h2>
            <span>lastName: {props.lastName}</span>
            <span>age: {props.age}</span>
            <span>bio: {props.bio}</span>
        </div>
    )
}
export default UserProfile