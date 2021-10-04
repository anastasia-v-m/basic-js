import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  
  getLength() {
    
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    
    this.chain.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    
    if (Number.isInteger(position) && position < this.chain.length && position > 0) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};
