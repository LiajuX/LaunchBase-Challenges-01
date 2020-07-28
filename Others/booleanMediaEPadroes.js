const classA = [
    {
        name: 'Júlia',
        grade: 10 
    },
    {
        name: 'Diego',
        grade: 6
    },
    {
        name: 'Mayk',
        grade: 2
    },
    {
        name: 'Victor',
        grade: 10
    }
]

const classB = [
    {
        name: 'Rafaella',
        grade: 2
    },
    {
        name: 'Isabelly',
        grade: 4
    },
    {
        name: 'Camila',
        grade: 7
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average.toFixed(1)
}

const averageA = calculateAverage(classA)
const averageB = calculateAverage(classB)

function sendMessage(average, schoolClass) {
    if (average >= 5) {
        console.log(`Congratulations! Class ${schoolClass} was very well, the average grade was ${average}`)
    } else {
        console.log(`I hope class ${schoolClass} get better next semester, the average grade was ${average}`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade <= 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    //student.flunked is a boolean 
    if (student.flunked) {
        console.log(`${student.name} got ${student.grade} and flunked.`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student) 
    }
}

sendMessage(averageA, 'A')
sendMessage(averageB, 'B')

studentsReprovados(classA)
studentsReprovados(classB)