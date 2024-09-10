import styles from "./LoginForm.module.css"
import { useState } from "react";

function LoginForm() {
    let [text, setText] = useState({
        user: "",
        password:""
    })
    function handleChange(e) {
     
        setText({...text, [e.target.name]:e.target.value})
    }
    function log(e) {
        console.log(text);
        e.preventDefault()
    }
    return (
        <form className={styles.card} onSubmit={log}>
            <input
             type="text" 
             onChange={handleChange}
             name="user"
             />
            <input
             type="password" 
             onChange={handleChange}
             name="password"
             />
            <button type="submit">Войти</button>
        </form>
    )
}

export default LoginForm