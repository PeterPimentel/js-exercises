const exercise = require('../8');

describe('Exercise 8', () => {
    test('Quando forem compradas 5 maçãs deve retornar 6.50', () => {
        expect(exercise(5)).toBe(6.50);
    });
    test('Quando forem compradas 12 maçãs deve retornar 12', () => {
        expect(exercise(12)).toBe(12);
    });

    test('Quando forem compradas 10 maçãs deve retornar 13', () => {
        expect(exercise(10)).toBe(13);
    });

    test('Quando forem compradas 20 maçãs deve retornar 20', () => {
        expect(exercise(20)).toBe(20);
    });
})