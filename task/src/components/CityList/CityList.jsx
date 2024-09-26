import CityItem from "../CityItem/CityItem";
import style from "./CityList.module.css";

function CityList(props) {
  return (
    <div>
      <ul className={style.card}>
        {props.cities.map((rq) => (
          <CityItem name={rq.name} population={rq.population} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
