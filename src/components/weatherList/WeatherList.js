import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadWeather} from '../../actions/weather';
import {Message, Divider, Button, Loader} from 'semantic-ui-react';
import CardItem from '../card/Card';
import './WeatherList.css';

const WeatherList = ({weather, forecast, error, load}) => {

  useEffect(() => {
    load();
  }, [load]);

  if (error) {
    return (
        <Message negative>
          <Message.Header>{error}</Message.Header>
          <Divider />
          <Button onClick={load}>Try again</Button>
        </Message>
    );
  } else if (weather && forecast) {
    const forecastCard = () => {
      return forecast.map((day, id) => <CardItem day={day} key={id} />)
    };

    return (
        <div>
          <div className='weather' ><CardItem day={weather} /></div>
          <div className='forecast'>{forecastCard()}</div>
        </div>
    )
  } else {
    return <Loader active inline='centered' />
  }
};

export default connect(state => ({
  weather: state.weather,
  error: state.hasError,
  forecast: state.forecast,
}), dispatch => ({
  load: () => dispatch(loadWeather())
}))(WeatherList);
