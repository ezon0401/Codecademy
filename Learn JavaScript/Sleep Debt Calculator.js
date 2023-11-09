const getSleepHours = (day) => {

    switch (day) {
        case 'monday':
            return 6;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 7;
        case 'friday':
            return 6;
        case 'saturday':
            return 8;
        case 'sunday':
            return 8;
    }

};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {

    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7);

    if (actualSleepHours === idealSleepHours) {
        console.log('Perfect!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You sleep ${actualSleepHours - idealSleepHours} hour(s) more than needed.`);
    } else {
        console.log(`You should sleep ${idealSleepHours - actualSleepHours} hour(s) more!`);
    }
};

calculateSleepDebt();