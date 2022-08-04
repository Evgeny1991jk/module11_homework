import { checkNum } from './check_conditions.js';

describe('cheking if number is odd or even', () => {
    const odd = 7;
    const even = 8;

    it('checking if number is even', () => {
        expect(checkNum(even)).toBe('число четное');
    }),
    it('checking if number is odd', () => {
        expect(checkNum(odd)).toBe('число нечетное');
    }),
    it('checking if invalid data', () => {
        expect(checkNum('Привет')).toBe('Упс, кажется, вы ошиблись');
    });
});