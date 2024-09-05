import headerC from "./Header.module.css"

function Header(props) {
    return (
        <h1 className={headerC['title-menu']}>{props.h1}</h1>
    )
}

export default Header