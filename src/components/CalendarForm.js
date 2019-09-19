import React, { Component } from 'react';
import {
  dateRegex,
  emailRegex,
  currentDate,
  timeRegex,
  currentTime
} from './validFunctions';

const formValid = ({ errors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(errors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class CalendarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      date: '',
      time: '',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: ''
      }
    };
  }

  inputsHandleChange = e => {
    const { name, value } = e.target;
    let errors = { ...this.state.errors };

    switch (name) {
      case 'firstName':
        errors.firstName =
          value.length < 2 ? 'minimum 2 characaters required' : '';
        break;
      case 'lastName':
        errors.lastName =
          value.length < 2 ? 'minimum 2 characaters required' : '';
        break;
      case 'email':
        errors.email = emailRegex.test(value) ? '' : 'invalid email address';
        break;
      case 'date':
        errors.date = dateRegex(value) ? '' : 'invalid date, check for sure';
        break;
      case 'time':
        errors.time = timeRegex.test(value) ? '' : 'invalid time';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  resetForm = () => {
    this.setState({
      [this.name]: this.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
    } else {
      window.alert('FORM INVALID');
    }
    this.resetForm();
  };

  render() {
    const { errors } = this.state;

    return (
      <div className='wrapper'>
        <form onSubmit={this.handleSubmit}>
          <div className='inputs'>
            <label htmlFor='firstName'> Name: </label>
            <input
              className={errors.firstName.length > 0 ? 'error' : null}
              type='text'
              name='firstName'
              id='firstName'
              placeholder='Jack'
              onChange={this.inputsHandleChange}
            />
            {errors.firstName.length > 0 && (
              <span className='errorMessage'>{errors.firstName}</span>
            )}
          </div>
          <div className='inputs'>
            <label htmlFor='lastName'> Last name: </label>
            <input
              className={errors.lastName.length > 0 ? 'error' : null}
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Daniels'
              onChange={this.inputsHandleChange}
            />
            {errors.lastName.length > 0 && (
              <span className='errorMessage'>{errors.lastName}</span>
            )}
          </div>
          <div className='inputs'>
            <label htmlFor='email'> E-mail: </label>
            <input
              className={errors.email.length > 0 ? 'error' : null}
              //didnt use type=email & date & time, to prevent default html5 validation
              type='text'
              name='email'
              id='email'
              placeholder='jack.daniels@domain.com'
              onChange={this.inputsHandleChange}
            />
            {errors.email && (
              <span className='errorMessage'>{errors.email}</span>
            )}
          </div>
          <div className='inputs'>
            <label htmlFor='date'> Date: </label>
            <input
              type='text'
              name='date'
              id='date'
              placeholder={currentDate()}
              onChange={this.inputsHandleChange}
            />
            {errors.date && <span className='errorMessage'>{errors.date}</span>}
          </div>
          <div className='inputs'>
            <label htmlFor='time'> Time: </label>
            <input
              type='text'
              name='time'
              id='time'
              placeholder={currentTime}
              onChange={this.inputsHandleChange}
            />
            {errors.time && <span className='errorMessage'>{errors.time}</span>}
          </div>
          <div className='inputs'>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CalendarForm;
