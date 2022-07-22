
const keyboard = document.getElementById("keyboard");
const gameboard = document.getElementById("game-board");

//keyboard.addEventListener('click',function (e){
//    gameboard.children[0].children[0].children[0].innerHTML = e.composedPath()[0].innerHTML
//});


function guessNumber(){
    guessNumber.counter += 1
    return guessNumber.counter;

}

keyboard.letterCounter = 0
keyboard.rowCounter = 0
keyboard.secretWord = ["R","I","C","K","Y"]
keyboard.guessWord = []
keyboard.addEventListener('click',function (e){
    if(e.composedPath().length > 7){ //if button click is valid
        if(e.composedPath()[0].innerHTML !== "BACK"){// if click is not backspace
            if(keyboard.letterCounter < 5){ //if the word isnt full
                if(e.composedPath()[0].innerHTML !== "ENTER"){
                    gameboard.children[keyboard.rowCounter].children[keyboard.letterCounter].children[0].innerHTML = e.composedPath()[0].innerHTML;
                    keyboard.guessWord.push(e.composedPath()[0].innerHTML)
                    keyboard.letterCounter += 1;
                    console.log(keyboard.letterCounter)
                }
                else{}
            }
            else{//if the word is full
                if(e.composedPath()[0].innerHTML == "ENTER"){//if the enter key is hit
                    if(keyboard.guessWord.toString() == keyboard.secretWord.toString()){//if the guess is correct
                        for (let i = 0; i < 5; i++){
                            gameboard.children[keyboard.rowCounter].children[i].style.backgroundColor = "green";
                        }
                        alert('WOW! GREAT JOB!')
                    }
                    else{ //if the guess is incorrect
                        var checker = [...keyboard.secretWord]
                        for (let i = 0; i < 5; i++){
                            if(keyboard.guessWord[i] == keyboard.secretWord[i]){
                                gameboard.children[keyboard.rowCounter].children[i].style.backgroundColor = "green";
                                var indexToRemove = checker.indexOf(keyboard.guessWord[i]);
                                checker.splice(indexToRemove, 1);
                            }
                            else if(checker.includes(keyboard.guessWord[i])){
                                gameboard.children[keyboard.rowCounter].children[i].style.backgroundColor = "yellow";
                                var indexToRemove = checker.indexOf(keyboard.guessWord[i]);
                                checker.splice(indexToRemove, 1);

                            }
                            else{
                                gameboard.children[keyboard.rowCounter].children[i].style.backgroundColor = "lightgray";
                            }

                        }
                        keyboard.rowCounter += 1
                        keyboard.letterCounter = 0
                        keyboard.guessWord = []
            
                    }
                }
                else if(e.composedPath()[0].innerHTML == "BACK"){
                    keyboard.guessWord.pop()
                    keyboard.letterCounter -= 1
                    gameboard.children[keyboard.rowCounter].children[keyboard.letterCounter].children[0].innerHTML = ""
                }
            }
        }
        else{
            if(keyboard.letterCounter >0){
                keyboard.guessWord.pop()
                keyboard.letterCounter -= 1
                gameboard.children[keyboard.rowCounter].children[keyboard.letterCounter].children[0].innerHTML = ""
                
            }
        }
    }
});



