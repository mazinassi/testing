import { expect } from 'chai';
import { shuffle } from '../starter/src/shuffle.js';

describe('shuffle function', () => {
  it('should shuffle the indexes of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);

    expect(shuffled).to.have.members(arr); // نفس العناصر لكن بالترتيب مختلف
    expect(shuffled).to.not.deep.equal(arr); // الترتيب مختلف (احتمال فشل قليل إذا صدفة نفس الترتيب)
  });
});
