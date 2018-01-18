import axios from 'axios';

import KEY from '../config';
const API_KEY = KEY;
// ES6 template string used below
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// By declaring a variable that is equal to a string to be used on the
// type of the Action that is returned, we avoid issues of mistyping, etc.
// as this variable is exported from here to be available for use in reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  //using us to make country code static
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
