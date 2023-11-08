const getUserChoice = (userInput) => {

    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Type a valid choice: rock, paper, scissors');
    }

};

const getComputerChoice = () => {

    computerInput = Math.floor(Math.random() * 3);

    if (computerInput === 0) {
        return 'rock';
    } else if (computerInput === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }

};

const determineWinner = (userChoice,  computerChoice) => {

    if (userChoice === 'bomb') {
        return 'User won';
    } else if (userChoice === computerChoice) {
        return 'Tie';
    } else {
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'Computer won';
            } else {
                return 'User won';
            }
        } else if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'Computer won';
            } else {
                return 'User won';
            }
        } else {
            if (computerChoice === 'rock') {
                return 'Computer won';
            } else {
                return 'User won';
            }
        }
    }

};

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice,  computerChoice));
};

playGame();