import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  //let plnext= false, plprev = false, mnnext= false, mnprev = false;
  let mnnext = 0; 
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    
      
      switch (arr[i]) {
        case '--discard-next': 
          mnnext = 2;
          
          break;
        
        case '--discard-prev': 
          //mnprev = true;
          if (res.length > 0) {
            if (mnnext !== 1) {
              res.pop();
            }
          }
          break;

        case '--double-next': 
          //plnext = true;
          if ((i + 1) < arr.length) {
            res.push(arr[i + 1]);
          }
          break;

        case '--double-prev': 
          //plprev = true;
          if (res.length > 0) { 
            if (mnnext !== 1) {
              res.push(res[res.length - 1]);
            }
          }
          break;
        default:
          if (mnnext !== 2){
            res.push(arr[i]);  
            if (mnnext === 1) {
              mnnext = 0;
            }      
          } else {
            mnnext = 1;
          }

          break;
      }
      

      
    
  }

  return res;
}
