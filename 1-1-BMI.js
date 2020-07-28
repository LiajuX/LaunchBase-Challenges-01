const name = 'Julia';
const weight = 57;
const height = 1.66;

const bmi = weight / (height * height);

if (bmi >= 30) {
    console.log(`${name}, you're overweight.`);
} else {
    console.log(`${name}, you're not overweight.`);
}