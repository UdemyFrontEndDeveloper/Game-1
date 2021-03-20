const btn = document.querySelector(".start");
const imgs = [...document.querySelectorAll("img")]

const gameResults = {
    yourChoice: "",
    pcChoice: ""
}

const actualResults = {
    gameNumbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

//computer hand selection

function aiChoice(){
    return imgs[Math.floor(Math.random() * 3)].dataset.option;
}

//hand selection

function handSelection(){
    gameResults.yourChoice = this.dataset.option;
    // console.log(this.dataset.option)
    imgs.forEach(img => img.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px red";
}

//game conditioning

function gameConditioning(player,ai){
    if(player === ai) return "Draw";
    else if((player === "paper" && ai === "stone")|| (player === "stone" && ai === "scissors") ||(player === "scissors" && ai === "paper")) return "You";
    else return "Computer";
}

//game results
function gamingResults(player,ai,gameConditioning){
document.querySelector("[data-summary='your-choice']").textContent= player;
document.querySelector("[data-summary='ai-choice']").textContent= ai;
document.querySelector("[data-summary='who-win']").textContent= gameConditioning;
document.querySelector(".numbers span").textContent=++actualResults.gameNumbers;
if(gameConditioning === "You")
document.querySelector(".wins span").textContent=++actualResults.wins;
if(gameConditioning === "Computer")
document.querySelector(".losses span").textContent=++actualResults.losses;
if(gameConditioning === "Draw")
document.querySelector(".draws span").textContent=++actualResults.draws;
}

//reseting game

function reseting(){
     gameResults.yourChoice= "";
    gameResults.pcChoice= "";
     imgs.forEach(img => img.style.boxShadow = "");
}

//starting game

const game = () =>{
    if(!gameResults.yourChoice) return alert("CHOISE A HAND");

    gameResults.pcChoice = aiChoice();
    const conditioning = gameConditioning(gameResults.yourChoice, gameResults.pcChoice);
    gamingResults(gameResults.yourChoice,gameResults.pcChoice,conditioning);

    reseting();
}

imgs.forEach(img => img.addEventListener("click",handSelection));
btn.addEventListener("click", game);
