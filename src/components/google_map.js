import React, { Component } from 'react';

class GoogleMap extends Component {
  // must use componentDidMount when working with 3rd party libraries
  // that don't "understand" how to work with React's render method
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        long: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
