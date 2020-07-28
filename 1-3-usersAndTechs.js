const users = [
    { name: 'Julia', techs: ['HTML', 'CSS', 'JavaScript', 'ReactNative'] },
    { name: "Anna", techs: ['CSS', 'JavaScript', 'ReactJS'] },
    { name: "Victor", techs: ['C++','Python'] }
];

function iterateUsers(user) {
    for (let i = 0; i < user.length; i++) {
        console.log(`${user[i].name} works with ${user[i].techs.join(', ')}`);
    }
};

iterateUsers(users);