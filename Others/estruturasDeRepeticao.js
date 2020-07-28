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
    },
    {
        nome: 'Victor',
        nota: 10
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
    let soma = 0

    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    
    //A idéia do return é retornar alguma coisa que só seria possível acessar dentro do escopo da função
    return media.toFixed(1)
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