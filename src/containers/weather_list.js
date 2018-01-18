import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
 render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>

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
