var winner = localStorage.getItem("Winner");
console.log(winner + " has won the game");

var winnerCard = document.getElementById('winnerCard');
document.getElementById('congrats').innerText = winner + " has won the game";
document.getElementById('description').innerHTML = "Congratulations on finding the MIGHTY QUARTZ!<br> Your future is looking crystal clear and the throne <br> is officially yours to claim.";

if (winner === "Player 1") {
  var character = localStorage.getItem("player1Character");
  switch (character) {
    case "JS":
      winnerCard.style.backgroundImage = "url('characters/jonsnow.jpg')";
      break;
    case "KD":
      winnerCard.style.backgroundImage = "url('characters/khaldrogo.jpg')";
      break;
    case "GW":
      winnerCard.style.backgroundImage = "url('characters/greyworm.jpg')";
      break;
    case "TG":
      winnerCard.style.backgroundImage = "url('characters/tormund.jpg')";
      break;
    case "VT":
      winnerCard.style.backgroundImage = "url('characters/viserys.jpg')";
      break;
    default:
  }
} else if (winner === "Player 2") {
  var character = localStorage.getItem("player2Character");
  switch (character) {
    case "AS":
      winnerCard.style.backgroundImage = "url('characters/arya.jpg')";
      break;
    case "M":
      winnerCard.style.backgroundImage = "url('characters/missandei.jpg')";
      break;
    case "DT":
      winnerCard.style.backgroundImage = "url('characters/daenerys.jpg')";
      break;
    case "MT":
      winnerCard.style.backgroundImage = "url('characters/margaery.jpg')";
      break;
    case "SS":
      winnerCard.style.backgroundImage = "url('characters/sansa.jpg')";
      break;
    default:
  }
}

winnerCard.style.backgroundSize = "cover";
