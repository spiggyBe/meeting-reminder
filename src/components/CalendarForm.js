import React, { Component } from 'react';


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


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


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
        time:''
      }
    };
  }


  inputsHandleChange = (e) => {
    
    const { name, value } = e.target;
    let errors = { ...this.state.errors };

    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 2 ? "minimum 2 characaters required" : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 2 ? "minimum 2 characaters required" : "";
        break;
      case "email":
        errors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      /* case "date":
        errors.date =
          value.length < 6 ? "minimum ............. required" : "";
        break;
        case "time":
        errors.time =
          value.length < 6 ? "minimum .............. required" : "";
        break; */
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => console.log(this.state));
  };
  


  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
    } else {
      window.alert("FORM INVALID");
    }
  };

    render() {
      const { errors } = this.state;
      return (
        <div className='wrapper'>
          <form onSubmit={this.handleSubmit}>
            <div className='inputs'>
              <label htmlFor='firstName'> Name: </label>
              <input
              className={errors.firstName.length > 0 ? "error" : null}
                type='text'
                name='firstName'
                id='firstName'
                placeholder='Type name'                
                onChange={this.inputsHandleChange}         
              />     
              {errors.firstName.length > 0 && (
                <span className="errorMessage">{errors.firstName}</span>
              )}  
            </div>
            <div className='inputs'>
              <label htmlFor='lastName'> Last name: </label>
              <input
              className={errors.lastName.length > 0 ? "error" : null}
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Type surname'               
                onChange={this.inputsHandleChange} 
              />  
              {errors.lastName.length > 0 && (
                <span className="errorMessage">{errors.lastName}</span>
              )}
            </div>
            <div className='inputs'>
              <label htmlFor='email'> E-mail: </label>
              <input
              className={errors.email.length > 0 ? "error" : null}
                type='email'
                name='email'
                id='email'
                placeholder='Type e-mail'                  
                onChange={this.inputsHandleChange} 
              /> 
              {errors.email.length > 0 && (
                <span className="errorMessage">{errors.email}</span>
              )}     
            </div>      
            <div className='inputs'>
              <label htmlFor='date'> Date: </label>
              <input              
                type='date'
                name='date'
                id='date'
                placeholder='Type date'              
                onChange={this.inputsHandleChange} 
              />             
            </div>    
            <div className='inputs'>
              <label htmlFor='time'> Time: </label>
              <input
                type='time'
                name='time'
                id='time'
                placeholder='Type time'                       
                onChange={this.inputsHandleChange} 
              />                
            </div>
            <div className='inputs'>
              <button type='submit' >
                Send
              </button>
            </div>
          </form>
        </div>
      )
    }
}
 

export default CalendarForm;