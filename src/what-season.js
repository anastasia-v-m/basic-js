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
