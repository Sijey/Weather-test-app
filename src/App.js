import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from './reducers/weather';
import thunk from 'redux-thunk';
import './App.css';
import WeatherList from "./components/weatherList/WeatherList";
import SearchBar from "./components/searchBar/SearchBar";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'>
        <SearchBar />
        <WeatherList />
      </div>
    </Provider>
  );
}

export default App;
