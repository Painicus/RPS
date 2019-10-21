const btn1 = document.querySelector('#Rock');
const btn2 = document.querySelector('#Paper');
const btn3 = document.querySelector('#Scissors');
btn1.addEventListener('click',() => {playRound("rock")});
btn2.addEventListener('click',() => {playRound("paper")});
btn3.addEventListener('click',() => {playRound("scissors")});
function computerPlay() {
  let selection = Math.floor(Math.random()*3);
  switch (selection){
    case 0: return selection="rock"
    break;
    case 1: return selection="paper"
    break;
    case 2: return selection="scissors"
    break;
  }
}
function playRound(player){
  let computer = computerPlay();
    if (player == "rock" && computer == "paper"){
          document.getElementById('Results')
          .textContent = "The Computer Wins";
      } else if (player == "rock" && computer == "scissors"){
          document.getElementById('Results')
          .textContent = "The Player Wins";
      } else if (player == "paper" && computer == "rock"){
          document.getElementById('Results')
          .textContent = "The Player Wins";
      } else if (player == "paper" && computer == "scissors") {
          document.getElementById('Results')
          .textContent = "The Computer Wins";
      } else if (player == "scissors" && computer == "paper"){
        document.getElementById('Results')
        .textContent = "The Player Wins";;
      } else if (player == "scissors" && computer == "rock"){
        document.getElementById('Results').textContent =
        "The Computer Wins";
      } else {
        document.getElementById('Results').textContent =
        "The Computer Wins";
    }
  }
