const exercise = require('../2');

describe('Exercise 2', () => {
    test('Quando informado 3 deve retornar 2', () => {
        expect(exercise(3)).toBe(2);
    });

    test('Quando informado 100 deve retornar 99', () => {
        expect(exercise(100)).toBe(99);
    });

    test('Quando informado 0 deve retornar -1', () => {
        expect(exercise(0)).toBe(-1);
    });
})