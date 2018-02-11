var Word = require("./Word");
var inquirer = require("inquirer");
var letterGuessed;
var wordsToGuess = ["briefcase", "suit", "shoes", "tie", "pen", "pencil", "jacket", "hat"];
var randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[randomIndex];
var randomWordSplit = randomWord.split("")
var splitLength = randomWordSplit.length
var myWord = new Word(randomWord);
var maxGuesses = 15;

function Guess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses) {
		console.log('You have no more guesses. TRY AGAIN!.');
	return;
	}
	inquirer.prompt([{
		name: 'keystroke',
		type: 'text',
		message: 'Enter a letter:',
		}]).then(function(letterInput) {
				var keyPress = letterInput.keystroke;
				myWord.findLetter(keyPress);
					if(myWord.isComplete()){
					console.log('YOU WIN! It was ' + myWord.toString() + '!');
					return;
        } else {
          console.log('-------------------\n');
          console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
          Guess();
        }
				}
  );
}
Guess();
