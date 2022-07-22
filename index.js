
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
        if(keyboard.letterCounter < 5){ //if the word isnt full
            gameboard.children[keyboard.rowCounter].children[keyboard.letterCounter].children[0].innerHTML = e.composedPath()[0].innerHTML;
            keyboard.guessWord.push(e.composedPath()[0].innerHTML)
            keyboard.letterCounter += 1;
            console.log(keyboard.letterCounter)
        }
        else{
            if(e.composedPath()[0].innerHTML == "ENTER"){
                if(keyboard.guessWord.toString() == keyboard.secretWord.toString()){
                    alert('WINNER')
                }
                else{
                    alert('LOSER')
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
    
 
});

