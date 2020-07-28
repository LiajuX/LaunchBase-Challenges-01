const alunosDaTurmaA = [
    {
        nome: 'Júlia',
        nota: 10
    },
    {
        nome: 'Diego',
        nota: 6
    },
    {
        nome: 'Mayk',
        nota: 9
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Rafaella',
        nota: 2
    },
    {
        nome: 'Isabelly',
        nota: 4
    },
    {
        nome: 'Camila',
        nota: 7
    }
]

function calculaMedia(alunos) {
    return ((alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3).toFixed(1)
}

const mediaA = calculaMedia(alunosDaTurmaA)
const mediaB = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if (media >= 5) {
        console.log(`Parabéns! A turma ${turma} foi bem e teve média de ${media}`)
    } else {
        console.log(`Espero que a turma ${turma} melhore no próximo bimestre, a média foi de ${media}`)
    }
}

enviaMensagem(mediaA, 'A')
enviaMensagem(mediaB, 'B')