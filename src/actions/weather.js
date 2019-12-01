import {loadData} from '../api/api';

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

const weatherApiLink = `https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&units=metric&lang=ru&
mode=json&appid=${openWeatherApiKey}`;

const forecastApiLink = `https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&units=metric&lang=ru&
mode=json&appid=${openWeatherApiKey}`;

export const WEATHER_ACTIONS = {
  HANDLE_SUCCESS: 'HANDLE_SUCCESS',
  HANDLE_ERROR: 'HANDLE_ERROR',
};

const handleError = (error) => ({
  type: WEATHER_ACTIONS.HANDLE_ERROR,
  payload: error,
});

export const handleWeatherWithForecast = (weather, forecast) => ({
  type: WEATHER_ACTIONS.HANDLE_SUCCESS,
  weather,
  forecast,
});

export const loadWeather = () => {
  return dispatch => {
    let success = false;
    Promise.all([loadData(weatherApiLink), loadData(forecastApiLink)])
        .then(([weather, forecast]) => {
            const dailyData = forecast.list.filter(reading => reading.dt_txt.includes('12:00:00'));
            dispatch(handleWeatherWithForecast(weather, dailyData));
            success = true;
        })
        .catch(() => dispatch(handleError('Loading failed')));
  }
};
