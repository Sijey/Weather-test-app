import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadWeather} from '../../actions/weather';
import {Message, Divider, Button, Loader} from 'semantic-ui-react';
import CardItem from '../card/Card';
import './WeatherList.css';

const WeatherList = ({weather, forecast, error, load, city}) => {

  useEffect(() => {
    load(city);
  }, [load]);

  if (weather && forecast) {
    const forecastCard = () => {
      return forecast.map((day, id) => <CardItem day={day} key={id} />)
    };

    return (
      <div>
        <h1>Weather in {weather.name}</h1>
        <div className='weather'><CardItem day={weather}/></div>
        <div className='forecast'>{forecastCard()}</div>
      </div>
    )
  } else if (error) {
    return (
      <Message negative>
        <Message.Header>{error}</Message.Header>
        <Divider />
        <Button onClick={load}>Try again</Button>
      </Message>
    );
  } else {
    return <Loader className='claim_loader' active inline='centered' />
  }
};

export default connect(state => ({
  weather: state.weather,
  error: state.hasError,
  forecast: state.forecast,
  city: state.cityName
}), dispatch => ({
  load: (city) => dispatch(loadWeather(city)),
}))(WeatherList);
