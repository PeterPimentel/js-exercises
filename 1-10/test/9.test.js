const exercise = require('../9');

describe('Exercise 9', () => {
    test('Quando as notas forem 5 e 6 deve retornar false', () => {
        expect(exercise(5, 6)).toBe(false);
    });
    test('Quando as notas forem 6 e 6 deve retornar true', () => {
        expect(exercise(6, 6)).toBe(true);
    });

    test('Quando as notas forem 10 e 7 deve retornar true', () => {
        expect(exercise(10, 7)).toBe(true);
    });
})