import React, { Component } from 'react';

    

export default class CalendarList extends Component {

  listToCalendar = dates => {
    let key = Math.floor(100 + Math.random() * 90);
    const { firstName, lastName, email, date, time } = dates;
    const name = `${firstName} ${lastName} ${email} ${date} ${time}`.trim();
    
  return (
    <li className="item">
    <div className="content">
      <h4>{name}</h4>
    </div>
  </li>
  )
  }


  render(){
  return (
    <>
      <ul className='list'>
        {this.props.contacts.map(this.listToCalendar)}
      </ul>
    </>
  );
  }
};
