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
