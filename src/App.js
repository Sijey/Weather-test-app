import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from './reducers/weather';
import thunk from 'redux-thunk';
import './App.css';
import WeatherList from "./components/weatherList/WeatherList";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
      <Provider store={store}>
        <WeatherList />
      </Provider>
  );
}

export default App;
