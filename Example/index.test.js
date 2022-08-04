import { double } from './index.js';


xdescribe('test double nums', () => {
it('double 3 to get 9', () => {
    const result = double(3, 2);
  expect(result).toBe(9);
}),

it('double 4 to get 16', () => {
    const result = double(4, 2);
  expect(result).toBe(18);
});
});


