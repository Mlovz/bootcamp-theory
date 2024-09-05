import weatherInfoC from "./WeatherInfo.module.css"

function WeatherInfo(props) {
    return (
        <div className={weatherInfoC.cont}>
                    <h3 className={weatherInfoC.temp}>{props.temp}</h3>
                    <p className={weatherInfoC.city}>{props.city}</p>
                    <span className={weatherInfoC.data}>{props.data}</span>
        </div>
    )
}


export default WeatherInfo