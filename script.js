var player1Character = "";
var player2Character = "";
var player1Card = document.getElementById('player1-card');
var player2Card = document.getElementById('player2-card');

// SELECTING CHARACTERS
  document.getElementById('jonsnow').addEventListener("click", function(){
    player1Character = "Jon Snow";
    if (player1Character === "Jon Snow") {
      localStorage.setItem("player1Character","Jon Snow");

      // Connect to launch api and convert to json format
      fetch('https://www.anapioficeandfire.com/api/characters?name=jon+snow')
      .then((response) => {
          return response.json();
      })
      .then((result) => {
          showCard(result);
      })
      .catch(error => console.log(error))
    } else {
        localStorage.removeItem("player1Character");
    }

    // append to card
    function showCard(response) {
      var character = response;
      for (var i = 0; i < character.length; i++) {
        player1Card.innerHTML= "Name: " + character[i].name + "<br> Gender: " + character[i].gender + "<br> Culture: " + character[i].culture;
        player1Card.style.backgroundColor = "blue";
      }
    }
  });

  document.getElementById('khaldrogo').addEventListener("click", function(){
    player1Character = "Khal Drogo";
    if (player1Character === "Khal Drogo") {
      localStorage.setItem("player1Character","Khal Drogo");
      // Connect to launch api and convert to json format
      fetch('https://www.anapioficeandfire.com/api/characters?name=drogo')
      .then((response) => {
          return response.json();
      })
      .then((result) => {
          console.log(result);
      })
      .catch(error => console.log(error))
    } else {
      localStorage.removeItem("player1Character");
    }
  });






  // if character is jon show
    // div style bg image jon snow card
    // api call jon snow
    // else
      // delete

      // or switch


/*function boardGame() {

  function createTile() {
      var tile = document.createElement("div");

      tile.className = "new-div";
      tile.innerText = [i];

      return tile;
    }

    var board = document.getElementById("board"),
      allTiles = [],
      i = 0,
      numOfTiles = 31;

    for (i; i < numOfTiles; i += 1) {
      allTiles.push(createTile());
      board.appendChild(allTiles[i]);
    }

    allTiles[0].className = "modified-div";
    allTiles[0].innerText = "start";
    allTiles[30].className = "win";
    allTiles[30].innerText = "magic stone";

    var token1 = document.createTextNode("token1");
    var token2 = document.createTextNode("token2");

    var position1 = 0;
    var position2 = 0;

    allTiles[0].appendChild(token1);
    allTiles[0].appendChild(token2);


    player2Dice.disabled = true;

    // PLAYER 1 CLICKY
    var player1Dice = document.getElementById('player1Dice');
    player1Dice.addEventListener('click', function() {

    // edit this to match number 6, if number = less than 6
      if (player2Dice.disabled === true) {
        player2Dice.disabled = false;
        player1Dice.disabled = true;
      } else if (player1Dice.disabled === true) {
        player2Dice.disabled = true;
        player1Dice.disabled = false;
      }

    // generate number
      number = Math.floor(Math.random() * 6) + 1;
      console.log("you got " + number);

      switch (number) {
        case 1:
        // if allTiles[i] has child remove child
          if (allTiles[i].hasChildNodes()) {
            allTiles[i].removeChild(token1);
          }

          console.log('number one');
          break;
        default:

      }

    }, false); // END of PLAYER 1

  }

  boardGame();
*/
