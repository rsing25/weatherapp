import React, {Component} from 'react';

import { connect } from 'react-redux';
import Chart from '../components/chart'

class WeatherList extends Component {

    renderWeather(cityData) {
        if(cityData == null) {
            return null;
        }
        const name = cityData.city.name;
        const temps = cityData.list.map( (weather) => weather.main.temp);
        const pressures = cityData.list.map( (weather) => weather.main.pressure);
        const humidities = cityData.list.map( (weather) => weather.main.humidity);

        return (cityData != null) ? (
            <tr key ={name}>
                <td>{name}</td>
                <td>
                 <Chart data = { temps } color = "orange" units ="K" />
                </td>
                <td>
                    <Chart data = { pressures } color = "green" units ="hPa"/>
                </td>
                <td>
                    <Chart data = { humidities } color = "black" units ="%"/>
                </td>

            </tr>
        ) : null;

    }
    render() {
        return (
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature(K)</th>
                    <th>Pressure(hPa)</th>
                    <th>Humidity(%)</th>
                </tr>
            </thead>
            <tbody>
                {this.renderWeather(this.props.weather)}
            </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps,null)(WeatherList);