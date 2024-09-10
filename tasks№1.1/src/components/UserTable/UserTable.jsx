import styles from "./UserTable.module.css"

function UserTable(props) {
    return (
        <div className={styles.card}>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.arr.map((i) => {
                            return (
                                <tr>
                                    <th>{i.id}</th>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTable