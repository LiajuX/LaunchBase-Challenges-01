const name = "Helen";
const gender = 'F';
const age = 75;
const service = 50;

if(gender === 'F' && service >= 30 && service + age >= 85) {
    console.log(`${name}, you're eligible to retire.`);
} else if(gender === 'M' && service >= 35 && service + age >= 95) {
        console.log(`${name}, you're eligible to retire.`); 
} else {
    console.log(`${name}, you're not eligible to retire.`); 
}