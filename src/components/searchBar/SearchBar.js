import React from 'react';
import {Button, Form, Input} from "semantic-ui-react";
import {connect} from "react-redux";
import {addCity, loadWeather} from "../../actions/weather";

const SearchBar = ({load, addCity}) => {
  return (
    <Form className='search_bar' onSubmit={load}>
      <Input>
        <Input type='text' size='small' onChange={event => addCity(event.target.value)} />
        <Button type='submit' size='small' color='green'>Получить погоду</Button>
      </Input>
    </Form>
  );
};

export default connect(null, dispatch => ({
  load: () => dispatch(loadWeather()),
  addCity: city => dispatch(addCity(city)),
}))(SearchBar);
