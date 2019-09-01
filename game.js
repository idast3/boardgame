function boardGame() {

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


    var player1Character = localStorage.getItem("player1Character");
    var player2Character = localStorage.getItem("player2Character");


    var token1 = document.createElement("span");
    var player1 = document.createTextNode(player1Character)
    token1.appendChild(player1);

    var token2 = document.createElement("span");
    var player2 = document.createTextNode(player2Character)
    token2.appendChild(player2);

    var position1 = 0;
    var position2 = 0;

    allTiles[0].appendChild(token1);
    allTiles[0].appendChild(token2);


    var player2Dice = document.getElementById('player2Dice');
    player2Dice.disabled = true;


    // PLAYER 1
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

      // move token
      position1 = position1 + number;
      token1.removeChild(player1);
      allTiles[position1].appendChild(token1);
      token1.appendChild(player1);


    }, false); // END of PLAYER 1


    // PLAYER 2 
    player2Dice.addEventListener('click', function() {

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

      // move token
      position2 = position2 + number;
      token2.removeChild(player2);
      allTiles[position2].appendChild(token2);
      token2.appendChild(player2);


    }, false); // END of PLAYER 2

  }

  boardGame();
