const users = [
    { name: "Julia", techs: ["HTML", "CSS", "Javascript", "React Native"] },
    { name: "Ana", techs: ["JavaScript", "ReactJS", "CSS"] },
    { name: "Daniel", techs: ["C++", "Python"] }
]

function checkIfUserWorksWithCSS(user) {
    for (let i = 0; i < user.techs.length; i++) {
        if (user.techs[i] === "CSS") return true;
    };

    return false;
};

for (let i = 0; i < users.length; i++) {
    const UserWorksWithCSS = checkIfUserWorksWithCSS(users[i]);

    if (UserWorksWithCSS) {
        console.log(`${users[i].name} works with CSS`);
    };
};

