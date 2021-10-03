import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(/* matrix */) {
  let cats = 0;
  for(let i = 0; i < arr.length; i++){
      let index;
      let pos = 0;
      while (index !== -1){
          index = arr[i].indexOf('^^', pos);
          if (index !== -1) {
              cats += 1;
              pos = index + 1;
          }
      }
  }

  return cats;
}
