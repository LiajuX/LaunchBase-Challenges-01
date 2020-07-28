const user = {
    name: 'Carol',
    age: 19,
    techs: [
        { name: 'C++', specialty: 'Desktop' },
        { name: 'Python', specialty: 'Data Science' },
        { name: 'JavaScript', specialty: 'Web/Mobile' }
    ]
};

console.log(`${user.name} is ${user.age} years old and works with ${user.techs[0].name} with specialty in ${user.techs[0].specialty}`);