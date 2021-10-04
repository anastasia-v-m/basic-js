import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }

  try {
    let d = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    console.log(d);
    console.log(date);
  
    if (d.getTime() !== date.getTime()) {
      throw new Error('Invalid date!');  
    } 
  } catch (error) {
    throw new Error('Invalid date!');
  }

  try {
    let m = date.getMonth();
    let res = 'winter';
    if (m >= 2 && m < 5) {
      res = 'spring' ;
    } else if (m >=5 && m < 8) {
      res = 'summer';
    } else if (m >=8 && m < 11) {
      res = 'autumn';
    } 

    return res;
  } catch (error) {
    throw new Error('Invalid date!');
  }
}
