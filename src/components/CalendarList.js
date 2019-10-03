import React from 'react';

class CalendarList extends React.Component {
  render() {
    const { contactsFromParent } = this.props;

    const contactsList = contactsFromParent.map(item => (
      <li key={item.id}>
        {item.firstName} {item.lastName}
        {', '} {item.email}
        {', '} {item.time}
        {', '} {item.date}
      </li>
    ));

    return <ul>{contactsList}</ul>;
  }
}

export default CalendarList;
