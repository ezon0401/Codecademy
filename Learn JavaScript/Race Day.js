let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = false;
let runnerAge = 18;

if (earlyRegister && runnerAge > 18) {
    raceNumber += 1000;
} 

if (earlyRegister && runnerAge > 18) {
    console.log(`The race starts at 9:30 am. Your race number is ${raceNumber}.`);
} else if (!earlyRegister && runnerAge > 18) {
    console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
    console.log('See the registration desk.');
}