var args = process.argv

console.log(args)


function Letter(letter, guessed) {
  this.letter = letter;
  this.guessed = guessed;
}


var newLetter = new Letter(letter,guessed)

Letter.prototype.spot = function() {
  if (Letter(guessed) === true) {
    console.log(Letter(letter))
  } else { (Letter(letter) = "_")
  }
}

Letter.prototype.correct = function() {
  if (args[2] === Letter(letter)) {
    Letter(guessed) = true
    newLetter.spot()
  } else {
    console.log("INCORRECT! Try again!")
    guessesRemaining--
    console.log(guessesRemaining + "Guesses Remaining.")
  }
}

newLetter.correct()
