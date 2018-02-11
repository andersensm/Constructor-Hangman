var Letter = require("./Letter")
var Word = function(value) {
  this.value = value;
  this.array = [];
  this.guessesMade = "";
  for(var i = 0; i < this.value.length; i++) {
		this.array.push(new Letter(this.value[i]))
	}
}
Word.prototype.isComplete = function(){
	for(var i = 0; i < this.array.length; i++){
    console.log(this.array[i].guessed)
		if(this.array[i].guessed === false) {
      return false;
    }
	}
	return true;
}
Word.prototype.findLetter = function(keyStroke){
	var lowerLetter = keyStroke.toLowerCase();
	if (this.guessesMade.indexOf(lowerLetter) > -1) {
		return console.log("***********Duplicate, pick another letter***********");
	}
	this.guessesMade += lowerLetter;
	for(var i=0; i<this.array.length;i++){
		if(this.array[i].value.toLowerCase() === lowerLetter){
		this.array[i].guessed = true;
		}
	}
};
Word.prototype.toString = function(){
  var output = "";
  for(var i = 0; i < this.array.length; i++){
    output += this.array[i].correct();
  }
  return output;
}

module.exports = Word;
