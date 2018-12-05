import axios from 'axios';

const API_KEY = 'e1e8745a9feec7cd789b6d2c05503d79';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

/** 1 action creater fetchWeather */
/** 2 action creater must always returns an action */
/** 3 action is object which always has type */
export const fetchWeather = (city) =>{
    console.log(city);
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log("request", request);

    // returing promise as a payload
    return {
        type : FETCH_WEATHER,
        payload: request
    };

}
/** create a const export it and assign that as type  */
export const FETCH_WEATHER ='FETCH_WEATHER';

