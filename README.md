## **Constructor-Hangman**


Designed to use the node.js terminal to access:
 * Randomly generated word for the hangman game
## **Code Style**
 * Object-Oriented Programming (OOP).
## **Code Example**
        var Word = function(value) {
          this.value = value;
          this.array = [];
          this.guessesMade = "";
          for(var i = 0; i < this.value.length; i++) {
            this.array.push(new Letter(this.value[i]))
          }
          console.log(this.array);
        }
        Word.prototype.isComplete = function(){
          for(var i = 0; i < this.array.length; i++){
            if(!this.array[i].guessed) {
              return false;
            }
          }
          return true;
        }
## **Installation**
Prerequisites:
* Fork and/or clone repository to your local environment.
Requirements:
* Text Editor
* Node.js
* Access package.json for additional details
## **How to use**
  1. Open Bash Terminal, path to folder location containing: index.js
  2. Type: node index.js
    * A prompt will appear, enter a letter. Keep guessing until either Winning or Losing.


Credits
This application was built by Sean Andersen, Full Stack Web Development Students at George Washington University's Coding Boot Camp.
License
Attribution-NonCommercial 4.0
International (CC BY-NC 4.0)

Sean Andersen-2018 (CC)
