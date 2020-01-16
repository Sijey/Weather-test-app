import React from 'react';
import {Card} from 'semantic-ui-react';
import './Card.css';

const CardItem = ({day}) => {

  const ms = day.dt * 1000;
  const dayName = new Date(ms).toLocaleDateString('ru', {weekday: 'short', day: 'numeric', month: 'long'});
  const imgURL = "owf owf-" + day.weather[0].id + " owf-3x";

  return (
    <Card className='claim_card'>
      <Card.Content>
        <Card.Header>{dayName}</Card.Header>
        <i className={imgURL}/>
        <Card.Meta>{Math.round(day.main.temp)} °C</Card.Meta>
        <Card.Description>{day.weather[0].description}</Card.Description>
      </Card.Content>
    </Card>
  )
};

export default CardItem;
