const buttons = document.querySelectorAll(".buttons");
let switchTurns = true;
const start = document.querySelector(".start");
let count = 0;
const player1Div = document.querySelector("#player1Div");
const player2Div = document.querySelector("#player2Div");
const player1Span = document.querySelector("#player1Span");
const player2Span = document.querySelector("#player2Span");



buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        count++
        game(button);    
        if(switchTurns === true){
            
            player2Div.classList.remove("turn")
            player1Div.classList.add("turn")
            player1Span.innerHTML = "Jogada de"

        }else{

            player1Div.classList.remove("turn")
            player2Div.classList.add("turn")
            player2Span.innerHTML = "Jogada de"

        }
        
        if(win()){
            for (let i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = true;
                
            }
        }

        if(count === 9 && !win()){
            console.log("Empate")
        }
    })
})
start.addEventListener("click", ()=>{
    const containerMain = document.querySelector(".containerMain");
    const startGame = document.querySelector(".playersName");
    
    startGame.classList.add("startGame")
    containerMain.classList.add("show");
    start.value = "restart";
    start.classList.remove("start")
    start.classList.add("restart");
    player1Div.classList.add("turn")
    player1Span.innerHTML = "Jogada de: " + "jogador"
    

    if(start.classList.value === "restart"){
        player1Div.classList.add("turn")
        player2Div.classList.remove("turn")
        player1Span.innerHTML = "Jogada de: " + "jogador"
        switchTurns = true;
        for (let i = 0; i < buttons.length; i++) {
         
            buttons[i].value = " ";
            buttons[i].disabled = false;
            
        }
    }
})

function game(button){
    if(switchTurns === true){
        button.value = "X"
        button.disabled = true
        switchTurns = false


    }else if(switchTurns === false){
        button.value = "O"
        button.disabled= true
        switchTurns = true;
    }
}

function win(){
    if(buttons[0].value === buttons[1].value && buttons[1].value === buttons[2].value 
        && buttons[0].value !== " " ){
 
            return true;
 
    }else if(buttons[3].value === buttons[4].value && buttons[4].value === buttons[5].value
            && buttons[3].value !== " "){

            return true;
 
    }else if(buttons[6].value === buttons[7].value && buttons[7].value === buttons[8].value
            && buttons[6].value !==" "){
 
            return true;
 
    }else if(buttons[0].value === buttons[4].value && buttons[4].value === buttons[8].value
            && buttons[0].value !== " "){
            
            return true;

    }else if(buttons[2].value === buttons[4].value && buttons[4].value === buttons[6].value
            && buttons[2].value !== " "){

            return true;

    }else if(buttons[0].value === buttons[3].value && buttons[3].value === buttons[6].value 
            && buttons[0].value !== " "){
                
                return true;
                
    }else if(buttons[1].value === buttons[4].value && buttons[4].value === buttons[7].value 
        && buttons[1].value !== " "){
            
            return true;
            
    }else if(buttons[2].value === buttons[5].value && buttons[5].value === buttons[8].value 
        && buttons[2].value !== " "){
            
            return true;
            
    }   
    return false;
}