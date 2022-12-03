/*
Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
estar em condições, um dos seguintes requisitos deve ser satisfeito:
    - Ter no mínimo 65 anos de idade.
    - Ter trabalhado no mínimo 30 anos.
    - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos

Escreva uma função que utilizando a função getUser retorne true ou false
para se o funcionário está qualificado para a aposentadoria

*/

const getUser = (nomeDoFuncionario) => {
    switch (nomeDoFuncionario) {
        case 'Carlos':
            return {
                idade: 30,
                trabalhado: 5
            }
        case 'Maria':
            return {
                idade: 65,
                trabalhado: 1
            }
        case 'Bruno':
            return {
                idade: 60,
                trabalhado: 20
            }
        case 'Bia':
            return {
                idade: 61,
                trabalhado: 25
            }
        case 'Eduardo':
            return {
                idade: 50,
                trabalhado: 31
            }
    }
}

function exercise(nome) {
}

module.exports = exercise;