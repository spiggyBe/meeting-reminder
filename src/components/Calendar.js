import React, { Component } from 'react';

import CalendarForm from './CalendarForm';
import CalendarList from './CalendarList';

const url = 'http://localhost:3005/dates';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch(url)
    .then(resp => {
      if(resp.ok) {
          return resp.json()
      }
      
      throw new Error('Network error!');
    })
    .then(dates =>  this.setState({contacts: dates})
    ) 
    .catch(error => {
      console.log('Something went wrong', error);
    });    
  }
  
  render() {
    
    return (
      <>
        <CalendarForm />
        <main className="list__container">
          <CalendarList contacts={this.state.contacts} />
        </main>
      </>
    );
  }
}
