const exercise = require('../10');

describe('Exercise 10', () => {
    test('Quando os valores forem 5 e 6 deve retornar 6', () => {
        expect(exercise(5, 6)).toBe(6);
    });
    test('Quando os valores forem 8 e 6 deve retornar 8', () => {
        expect(exercise(8, 6)).toBe(8);
    });
})