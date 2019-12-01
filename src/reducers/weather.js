import {WEATHER_ACTIONS} from '../actions/weather';

const initialState = {
  hasError: null,
  weather: null,
  forecast: [],
};

 export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_ACTIONS.HANDLE_ERROR:
      return {
        ...state,
        hasError: action.payload,
      };
    case WEATHER_ACTIONS.HANDLE_SUCCESS:
      return {
        ...state,
        weather: action.weather,
        forecast: action.forecast,
      };
    default:
      return state;
  }
};
