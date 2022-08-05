// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

// Input = scissor/paper/stone
// Output = whether player won or the program won or it is a draw
// Computer's option can be randomly generated using random numbers and assign a string to it
// There are total 3 cases = win , lose , draw

var userWinCount = 0;
var userPlayCount = 0;
var currentGameMode = "waiting for user name";
var userName = "";
// Generate win rate of the player
function winRate() {
  var winningRate = Math.floor((userWinCount / userPlayCount) * 100);
  return `Your win rate is ${winningRate} %. Keep it up!`;
}

function main(input) {
  var output = "";
  if (currentGameMode == "waiting for user name") {
    // Player input will be the user name
    userName = input;
    // After first input, the gamemode will switch
    currentGameMode = "game started";
    output = `Hello, ${input}. Welcome to the game!<br> Enter scissors or paper or stone to start the challenge!`;
  } else if ((currentGameMode = "game started")) {
    // after the gamemode switch, the programme should proceed to the next function scipaperstone where the input will become user choice.
    output = scipaperstone(userName, input);
  }
  return output;
}

// generate random number which represent each choice: scissors, paper and stone
function randNum() {
  var randNum = Math.floor(Math.random() * 3);
  if (randNum == 0) {
    return "scissors";
  }
  if (randNum == 1) {
    return "paper";
  }
  if (randNum == 2) {
    return "stone";
  }
}

function secretWord() {
  if (
    userChoice == "banana" ||
    userChoice == "papaya" ||
    userChoice == "tomato"
  )
    return `You got the secret word!`;
}

// the game function after the game mode changed
function scipaperstone(userName, userChoice) {
  var message = "";
  var computerChoice = randNum();
  var winRateInfo = winRate();
  // every valid input will be given a +1 count
  userPlayCount += 1;

  // Input validation to ensure player key in the correct entry scissors,paper or stone
  if (
    !(
      userChoice == "scissors" ||
      userChoice == "paper" ||
      userChoice == "stone"
    )
  ) {
    return (message = `Invalid entry.<br> Please enter scissors or paper or stone.`);
  }
  // if the player choice and computer choice are the same, the game is draw
  if (userChoice == computerChoice) {
    
    // winrate be updated if it is a draw
    winRateInfo = winRate();
    message = `It is a draw! Try again, Good luck! <br>Your Choice: ${userChoice} <br>Computer: ${computerChoice}. <br>Current Winning: ${userWinCount}<br> You played ${userPlayCount} rounds <br>${winRateInfo}`;
    return message;
  }
  // if the player choice beat the computer choice, they win
  if (
    (userChoice == "scissors" && computerChoice == "paper") ||
    (userChoice == "paper" && computerChoice == "stone") ||
    (userChoice == "stone" && computerChoice == "scissors")
  ) {
    // wincount everytime player win
    userWinCount += 1;
    // winrate be updated if it is a win
    winRateInfo = winRate();
    message = `Congratulations, you won! <br>Your Choice: ${userChoice} <br>Computer: ${computerChoice}.<br>Current Winning: ${userWinCount}<br> You played ${userPlayCount} rounds <br> ${winRateInfo}`;
    return message;

    // if the computer choice beat the player, they lost
  } else {
    // winrate be update if it is a lost
    winRateInfo = winRate();
    message = `Sorry, you lost! <br>Your Choice: ${userChoice} <br>Computer: ${computerChoice}. <br>Try again, good luck! <br>Current Winning: ${userWinCount}<br>You played ${userPlayCount} rounds<br> ${winRateInfo}`;
    return message;
  }
}
