const exercise = require('../12');

describe('Exercise 12', () => {
    test.each([['Carlos', false], ['Maria', true], ['Bruno', false], ['Bia', true], ['Eduardo', true]])(
        'Quando informado %s deve retornar  %s',
        (nome, expected) => {
            expect(exercise(nome)).toBe(expected);
        },
    );
})