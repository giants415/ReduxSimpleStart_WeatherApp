import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9/5) - 459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // below says: access the coord object, grab the lon and lat properties
    // and then assign them to a "new" consts with names lon and lat
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap /></td>
        <td><Chart data={temps} color="red" units="F"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="blue" units="%"/></td>
      </tr>
    );
  }


  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  // above, weather is pulled off the larger state object (es6 syntax)
  // below, due to the above, the key and value would be the same
  // (ie. { weather: weather })but, since they are the same, can be refactored
  // to just be what is below
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
