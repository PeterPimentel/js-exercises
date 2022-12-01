const exercise = require('../7');

describe('Exercise 7', () => {
    test('Quando informado o valor 5 deve retornar NÃO É MAIOR QUE 10!', () => {
        expect(exercise(5)).toBe("NÃO É MAIOR QUE 10!");
    });
    test('Quando informado o valor 13 deve retornar É MAIOR QUE 10!', () => {
        expect(exercise(13)).toBe("É MAIOR QUE 10!");
    });

    test('Quando informado o valor 10 deve retornar NÃO É MAIOR QUE 10!', () => {
        expect(exercise(10)).toBe("NÃO É MAIOR QUE 10!");
    });
})