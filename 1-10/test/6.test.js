const exercise = require('../6');

describe('Exercise 6', () => {
    describe('Total de eleitores 10, votos brancos 1, votos nulos 3, votos válidos 6', () => {
        test('Percentual de votos brancos deve ser 10', () => {
            const result = exercise(10, 1, 3, 6)
            expect(result.brancos).toBe(10);
        });
        test('Percentual de votos nulos deve ser 30', () => {
            const result = exercise(10, 1, 3, 6)
            expect(result.nulos).toBe(30);
        });
        test('Percentual de votos válidos deve ser 60', () => {
            const result = exercise(10, 1, 3, 6)
            expect(result.validos).toBe(60);
        });
    })

    describe('Total de eleitores 100, votos brancos 20, votos nulos 5, votos válidos 75', () => {
        test('Percentual de votos brancos deve ser 20', () => {
            const result = exercise(100, 20, 5, 75)
            expect(result.brancos).toBe(20);
        });
        test('Percentual de votos nulos deve ser 5', () => {
            const result = exercise(100, 20, 5, 75)
            expect(result.nulos).toBe(5);
        });
        test('Percentual de votos válidos deve ser 75', () => {
            const result = exercise(100, 20, 5, 75)
            expect(result.validos).toBe(75);
        });
    })
})