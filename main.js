const targetForm = document.querySelector(".input-target");
const playForm = document.querySelector(".input-play");
const playWin = document.querySelector(".win");
const playLoss = document.querySelector(".loss");
const playTarget = document.querySelector(".target");
const tNumber = document.querySelector(".target-number"); 
const tplay = document.querySelector(".target-play"); 
const gameOver = document.querySelector(".gameOver");
const reset = document.querySelector(".reset");
const imoji = document.querySelector(".imoji");

let counterWin = 0;
let counterLoss = 0;
let counter = 5;
let count = 0;

playTarget.textContent = counter;


targetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = +tNumber.value;
    if(val < 1 || val === ''){
        tNumber.value = '';
        targetForm.insertAdjacentHTML("beforebegin", '<p class="alert">Please input valid number</p>')
        setTimeout(alertFun, 3000);
    }else{
        tNumber.value = '';
        playTarget.textContent = val;
        counter = val;
        resetFun();
    };
    
});

function alertFun(){
    return document.querySelector(".alert").remove();
};


playForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const play = +tplay.value;
    if(play < 1 || play === ''){
        tplay.value = '';
        alert("Please input valid number to playing the game")
    }else{
        tplay.value = '';
        const lTarget = playGame(play);
        if(count === counter){
            if(counterWin > counterLoss){
                imoji.style.display = "block";
                gameOver.insertAdjacentHTML("beforebegin",`<h2 class="playerIsWinner">You are wine. The number is: ${counterWin}</h2>`)
            }else{
                gameOver.insertAdjacentHTML("beforebegin",`<h2 class="playerIsLooser">You are lost. The looser number is: ${counterLoss}</h2>`)
                imoji.style.display = "block";
            }
            reset.style.display = "block";
            gameOver.textContent = "game is over";
            tplay.setAttribute("disabled","disabled");
        }else{
            if(lTarget === play){
                counterWin++;
                count++;
                playWin.textContent = counterWin;
               }else{
                counterLoss++;
                count++;
                playLoss.textContent = counterLoss;
               };
        }
       
    }
})

const playGame = (pass) => {
    return Math.ceil(Math.random() * pass);
}
reset.addEventListener("click", (e) => {
    e.preventDefault();
    counter = 5;
    playTarget.textContent = counter;
    resetFun();
})

const resetFun = () => {
    if(document.querySelector(".playerIsWinner")){
        document.querySelector(".playerIsWinner").remove();
    }
    if(document.querySelector(".playerIsLooser")){
        document.querySelector(".playerIsLooser").remove();
    }
    gameOver.textContent = " ";
    counterWin = 0;
    counterLoss = 0;
    count = 0;
    playWin.textContent = counterWin;
    playLoss.textContent = counterLoss;
    tplay.removeAttribute("disabled","disabled");
    reset.style.display = "none";
    imoji.style.display = "none";
}

