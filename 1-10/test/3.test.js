const exercise = require('../3');

describe('Exercise 3', () => {
    test('Quando informado 3 e 5 deve retornar 15', () => {
        expect(exercise(3, 5)).toBe(15);
    });

    test('Quando informado 20 e 10 deve retornar 200', () => {
        expect(exercise(20, 10)).toBe(200);
    });
})