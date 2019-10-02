import React from 'react';

class CalendarList extends React.Component {
  render() {
    const { contactsFromParent } = this.props;

    const contactsList = contactsFromParent.map(item => (
      <li key={item.id}>{item.firstName}</li>
    ));

    return <ul>{contactsList}</ul>;
  }
}

export default CalendarList;
