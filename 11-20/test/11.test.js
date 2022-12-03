const exercise = require('../11');

describe('Exercise 11', () => {
    test('Quando o cliente comprar 3Kg de morango e 1Kg de maça deve pagar 9.3', () => {
        expect(exercise(3, 1)).toBe(9.3);
    });

    test('Quando o cliente comprar 1Kg de morango e 6Kg de maça deve pagar 11.5', () => {
        expect(exercise(1, 6)).toBe(11.5);
    });

    test('Quando o cliente comprar 1Kg de morango e 8Kg de maça deve pagar 13.05', () => {
        expect(exercise(1, 8)).toBe(13.05);
    });

    test('Quando o cliente comprar 7Kg de morango e 0Kg de maça deve pagar 15.400000000000002', () => {
        expect(exercise(7, 0)).toBe(15.400000000000002);
    });

    test('Quando o cliente comprar 0Kg de morango e 20Kg de maça deve pagar 27', () => {
        expect(exercise(0, 20)).toBe(27);
    });

    test('Quando o cliente comprar 0Kg de morango e 0Kg de maça deve pagar 0', () => {
        expect(exercise(0, 0)).toBe(0);
    });
})