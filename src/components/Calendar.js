import React, { Component } from 'react';

import CalendarForm from './CalendarForm';
import CalendarList from './CalendarList';

const url = 'http://localhost:3005/dates';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      date: '',
      time: ''
    };
  }

  componentDidMount() {
    fetch(url)
      .then(resp => {
        if (resp) {
          return resp.json();
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      });
  }

  render() {
    return (
      <>
        <CalendarForm />
        <CalendarList />
      </>
    );
  }
}
