import React from 'react';
import {Form, Input} from "semantic-ui-react";
import {connect} from "react-redux";
import {addCity, loadWeather} from "../../actions/weather";

const SearchBar = ({city, load, addCity}) => {
  return (
    <Form className='search_bar' onSubmit={() => load(city)}>
      <Input type='text' name={city} onChange={event => addCity(event.target.value)} />
      <Input type='submit' value='Get weather' />
    </Form>
  );
};

export default connect(state => ({
  city: state.cityName
}), dispatch => ({
  load: (city) => dispatch(loadWeather(city)),
  addCity: city => dispatch(addCity(city)),
}))(SearchBar);
