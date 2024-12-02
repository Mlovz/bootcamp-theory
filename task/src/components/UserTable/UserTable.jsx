import style from "./UserTable.module.css";

function UserTable(props) {
  return (
    <div className={style.card}>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((a) => {
            return (
              <tr>
                <th>{a.name}</th>
                <td>{a.email}</td>
                <td>{a.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
