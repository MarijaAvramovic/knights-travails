import { knightMovesPossible } from './index.js';

 
describe('knightMovesPossible', () => {
  test('returns correct moves from corner (0,0)', () => {
    const result = knightMovesPossible(0, 0);

    const expected = [
      [1, 2],
      [2, 1]
    ];

    expect(result).toEqual(expect.arrayContaining(expected));
  });
});