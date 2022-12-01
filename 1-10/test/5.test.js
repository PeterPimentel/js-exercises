const exercise = require('../5');

describe('Exercise 5', () => {
    test('Quando informado um sálario de 1000 e reajuste de 5% deve retornar 1050', () => {
        expect(exercise(1000, 5)).toBe(1050);
    });
    test('Quando informado um sálario de 500 e reajuste de 20% deve retornar 600', () => {
        expect(exercise(500, 20)).toBe(600);
    });
})