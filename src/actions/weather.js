import {loadData} from '../api/api';

const API = 'https://api.openweathermap.org/data/2.5/';
const linkProps = '&units=metric&lang=ru&mode=json&appid=';
const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

export const WEATHER_ACTIONS = {
  HANDLE_SUCCESS: 'HANDLE_SUCCESS',
  HANDLE_ERROR: 'HANDLE_ERROR',
  ADD_CITY: 'ADD_CITY',
};

const handleError = (error) => ({
  type: WEATHER_ACTIONS.HANDLE_ERROR,
  payload: error,
});

export const addCity = (city) => ({
  type: WEATHER_ACTIONS.ADD_CITY,
  city,
});

export const handleWeatherWithForecast = (weather, forecast) => ({
  type: WEATHER_ACTIONS.HANDLE_SUCCESS,
  weather,
  forecast,
});

export const loadWeather = (city) => {
  return dispatch => {
    Promise.all([loadData(`${API}weather?q=${city + linkProps + openWeatherApiKey}`),
                        loadData(`${API}forecast?q=${city + linkProps + openWeatherApiKey}`)])
        .then(([weather, forecast]) => {
            const dailyData = forecast.list.filter(reading => reading.dt_txt.includes('06:00:00'));
            dispatch(handleWeatherWithForecast(weather, dailyData));
        })
        .catch(() => dispatch(handleError('Loading failed')));
  }
};
