//library to quick set formated date/time
var moment = require('moment');

export const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export let dateRegex = dateString => {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateString.match(regEx)) return false; // Invalid format
  var d = new Date(dateString);
  var dNum = d.getTime();
  if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0, 10) === dateString;
};

export let timeRegex = RegExp(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/);

//placeholder init today's date
export let currentDate = (separator = '-') => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}
  ${month < 10 ? `0${month}` : `${month}`}${separator}${date}`;
};

//placeholder init today's time
export let currentTime = new moment().format('HH:mm');
