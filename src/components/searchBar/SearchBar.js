import React from 'react';
import {Form, Input} from "semantic-ui-react";
import {connect} from "react-redux";
import {addCity, loadWeather} from "../../actions/weather";

const SearchBar = ({load, addCity}) => {
  return (
    <Form className='search_bar' onSubmit={load}>
      <Input type='text' onChange={event => addCity(event.target.value)} />
      <Input type='submit' value='Получить погоду' />
    </Form>
  );
};

export default connect(null, dispatch => ({
  load: () => dispatch(loadWeather()),
  addCity: city => dispatch(addCity(city)),
}))(SearchBar);
