const exercise = require('../13');

describe('Exercise 13', () => {
    test('Quando informado [1,4,8,3,9,10] deve retornar [8,9,10]', () => {
        expect(exercise([1, 4, 8, 3, 9, 10])).toStrictEqual([8, 9, 10]);
    });
})