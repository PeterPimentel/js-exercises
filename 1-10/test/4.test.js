const exercise = require('../4');

describe('Exercise 4', () => {
    test('Quando informado 1 anos 1 mes e 30 dias deve retornar 425', () => {
        expect(exercise(1, 1, 30)).toBe(425);
    });
    test('Quando informado 10 anos 2 meses e 1 dia deve retornar 3711', () => {
        expect(exercise(10, 2, 1)).toBe(3711);
    });
})