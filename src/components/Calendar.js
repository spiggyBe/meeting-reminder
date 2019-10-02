import React, { Component } from 'react';
import CalendarForm from './CalendarForm';
import CalendarList from './CalendarList';

class Calendar extends Component {
  urlAPI = 'http://localhost:3005/dates';

  state = {
    contacts: []
  };

  addContact = data => {
    this.postData(data);
  };

  postData(data) {
    fetch(this.urlAPI, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(d => {
        this.setState({
          contacts: [...this.state.contacts, d]
        });
      });
  }

  componentDidMount() {
    fetch(this.urlAPI)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);

        this.setState({
          contacts: resp
        });
      });
  }

  render() {
    return (
      <section>
        <CalendarForm addContactFromParent={this.addContact} />
        <CalendarList contactsFromParent={this.state.contacts} />
      </section>
    );
  }
}

export default Calendar;
