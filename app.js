let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoints = document.querySelector("#user-score");
const compPoints = document.querySelector("#comp-score");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let optIdx = Math.floor(Math.random() * 3);
    return compChoice = options[optIdx];
}

let playerChoice = (userChoice,compChoice) => {
    console.log(`UserChoice ${userChoice}`);
    console.log(`CompChoice ${compChoice}`);
}

const drawGame = () => {
    console.log("Game Draw!");
    msg.innerText="Game Draw! PLAY AGAIN.";
    msg.style.backgroundColor="blue";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userPoints.innerText = userScore;
        console.log(`You Win!`);
        msg.innerText=`"You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compPoints.innerText = compScore;
        console.log("You Lost!");
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        compChoice = generateCompChoice();
        playerChoice(userChoice,compChoice);

        if(userChoice === compChoice){
            drawGame();
        }
        else{
            let userWin = true;
            if(userChoice==="rock"){
                //scissors paper
                userWin = compChoice==="paper" ? false : true;
            }
            else if(userChoice==="paper"){
                //scissors rock
                userWin = compChoice==="scissors" ? false : true;
            }
            else{
                //rock paper
                userWin = compChoice==="rock" ? false : true;
            }
            
            showWinner(userWin,userChoice,compChoice);
        }
        
    })
})

