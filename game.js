function boardGame() {

document.getElementById('dice-number').innerHTML = "Roll the dice"

  function createTile() {
      var tile = document.createElement("div");
      tile.className = "new-div";
      tile.innerHTML = [i] + "<br>";

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

    allTiles[0].className = "start";
    allTiles[0].innerText = "";
    allTiles[0].style.backgroundColor = "#000";
    allTiles[30].className = "win";
    allTiles[30].style.backgroundColor = "#333";

    allTiles[30].style.backgroundImage = "url('crystal-icon-big.png')";
    allTiles[30].style.backgroundSize = "45%";
    allTiles[30].style.backgroundRepeat = "no-repeat";
    allTiles[30].style.backgroundPosition= "center";


    allTiles[4].style.backgroundImage = "url('characters/crystal-icon2.png')";
    allTiles[4].style.backgroundSize = "25%";
    allTiles[4].style.backgroundRepeat = "no-repeat";
    allTiles[4].style.backgroundPosition= "center";

    allTiles[8].style.backgroundImage = "url('characters/crystal-icon.png')";
    allTiles[8].style.backgroundSize = "25%";
    allTiles[8].style.backgroundRepeat = "no-repeat";
    allTiles[8].style.backgroundPosition= "center";

    allTiles[12].style.backgroundImage = "url('characters/crystal-icon3.png')";
    allTiles[12].style.backgroundSize = "30%";
    allTiles[12].style.backgroundRepeat = "no-repeat";
    allTiles[12].style.backgroundPosition= "center";

    allTiles[16].style.backgroundImage = "url('characters/crystal-icon4.png')";
    allTiles[16].style.backgroundSize = "33%";
    allTiles[16].style.backgroundRepeat = "no-repeat";
    allTiles[16].style.backgroundPosition= "center";

    allTiles[20].style.backgroundImage = "url('characters/crystal-icon5.png')";
    allTiles[20].style.backgroundSize = "25%";
    allTiles[20].style.backgroundRepeat = "no-repeat";
    allTiles[20].style.backgroundPosition= "center";

    allTiles[24].style.backgroundImage = "url('characters/crystal-icon.png')";
    allTiles[24].style.backgroundSize = "25%";
    allTiles[24].style.backgroundRepeat = "no-repeat";
    allTiles[24].style.backgroundPosition= "center";

    allTiles[28].style.backgroundImage = "url('characters/crystal-icon2.png')";
    allTiles[28].style.backgroundSize = "25%";
    allTiles[28].style.backgroundRepeat = "no-repeat";
    allTiles[28].style.backgroundPosition= "center";



    var player1Character = localStorage.getItem("player1Character");
    var player2Character = localStorage.getItem("player2Character");

    var winner = "";

    var token1 = document.createElement("span");
    var player1 = document.createTextNode("P1");

    switch (player1Character) {
      case "JS":
        token1.style.backgroundImage = "url('characters/jonsnow.jpg')";
        break;
      case "KD":
        token1.style.backgroundImage = "url('characters/khaldrogo.jpg')";
        break;
      case "VT":
        token1.style.backgroundImage = "url('characters/viserys.jpg')";
        break;
      case "GW":
        token1.style.backgroundImage = "url('characters/greyworm.jpg')";
        break;
      case "TG":
        token1.style.backgroundImage = "url('characters/tormund.jpg')";
        break;
      default:
    }

    token1.style.backgroundSize = "cover";
    token1.style.backgroundRepeat = "no-repeat";
    token1.appendChild(player1);

    var token2 = document.createElement("span");
    var player2 = document.createTextNode("P2");

    switch (player2Character) {
      case "AS":
        token2.style.backgroundImage = "url('characters/arya.jpg')";
        break;
      case "DT":
        token2.style.backgroundImage = "url('characters/daenerys.jpg')";
        break;
      case "SS":
        token2.style.backgroundImage = "url('characters/sansa.jpg')";
        break;
      case "M":
        token2.style.backgroundImage = "url('characters/missandei.jpg')";
        break;
      case "MT":
        token2.style.backgroundImage = "url('characters/margaery.jpg')";
        break;
      default:
    }

    token2.style.backgroundSize = "cover";
    token2.style.backgroundRepeat = "no-repeat";
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

      document.getElementById('dice-number').innerHTML = "You got " + number;



        // move token
        position1 = position1 + number;
        if (position1 < 30 ) {
          token1.removeChild(player1);
          allTiles[position1].appendChild(token1);
          token1.appendChild(player1);
        }


        // traps
        switch (position1) {
          case 4:
            setTimeout(function(){
              alert("The weight of the world falls off your shoulders as this BLACK TOURMALINE drains away all the negative energy you have gathered. Take a light jump three steps forward.");
              position1 = position1 + 3;
              token1.removeChild(player1);
              allTiles[position1].appendChild(token1);
              token1.appendChild(player1);
            }, 500);


            break;

          case 8:
            setTimeout(function(){
              alert("You discovered a ROSE QUARTZ, the crystal that makes your heart race and cheeks blush! Enjoy the romance as you float on a pink cloud five steps in the opposite direction.");
              position1 = position1 - 5;
              token1.removeChild(player1);
              allTiles[position1].appendChild(token1);
              token1.appendChild(player1);
            }, 500);

            break;

          case 12:
            setTimeout(function(){
              alert("Ouch! You ran into a powerful MALACHITE that caused you a really bad headache. Take six steps backwards to feel better.")
              position1 = position1 - 6;
              token1.removeChild(player1);
              allTiles[position1].appendChild(token1);
              token1.appendChild(player1);
            }, 500);


            break;

          case 16:
            setTimeout(function(){
              alert("This protective BLACK OBSIDIAN helps you brace yourself because winter is coming. Take five confident steps forward.")
              position1 = position1 + 5;
              token1.removeChild(player1);
              allTiles[position1].appendChild(token1);
              token1.appendChild(player1);
            }, 500);

            break;

          case 20:
            setTimeout(function(){
              alert("You could swear you just spotted a sparkly PYRITE but it turns out it was just a regular BORING GREY STONE. So sure of yourself though, you take three steps backwards to look one more time.")
              position1 = position1 - 3;
              token1.removeChild(player1);
              allTiles[position1].appendChild(token1);
              token1.appendChild(player1);
            }, 500);

            break;

          case 24:
            setTimeout(function(){
              alert("You just picked up a PURPLE AMETHYST which radiates so much calm energy that you fall asleep on the ground and roll two steps back. Sweet dreams!")
              position1 = position1 - 2;
              token1.removeChild(player1);
              allTiles[position1].appendChild(token1);
              token1.appendChild(player1);
            }, 500);


            break;

          case 28:
            setTimeout(function(){
              alert("You just picked up a RAINBOW FLOURITE so powerful that it opens a portal gate in front of you. Curious as you are, you take the stone through the portal and end up five steps behind.")
              position1 = position1 - 5;
              token1.removeChild(player1);
              allTiles[position1].appendChild(token1);
              token1.appendChild(player1);
            }, 500);

            break;
          default:

        }



      if (position1 > 29) {
        localStorage.setItem("Winner", "Player 1");
        winner = player1Character;
        window.open("win.html");
      }


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

      document.getElementById('dice-number').innerHTML = "You got " + number;

        // move token
        position2 = position2 + number;
        if (position2 < 30) {
          token2.removeChild(player2);
          allTiles[position2].appendChild(token2);
          token2.appendChild(player2);
        }


        // traps
        switch (position2) {
          case 4:
            setTimeout(function(){
              alert("The weight of the world falls off your shoulders as this BLACK TOURMALINE drains away all the negative energy you have gathered. Take a light jump three steps forward.");
              position2 = position2 + 3;
              token2.removeChild(player2);
              allTiles[position2].appendChild(token2);
              token2.appendChild(player2);
            }, 500);


            break;

          case 8:
            setTimeout(function(){
              alert("You discovered a ROSE QUARTZ, the crystal that makes your heart race and cheeks blush! Enjoy the romance as you float on a pink cloud five steps in the opposite direction.");
              position2 = position2 - 5;
              token2.removeChild(player2);
              allTiles[position2].appendChild(token2);
              token2.appendChild(player2);
            }, 500);

            break;

          case 12:
            setTimeout(function(){
              alert("Ouch! You ran into a powerful MALACHITE that caused you a really bad headache. Take six steps backwards to feel better.")
              position2 = position2 - 6;
              token2.removeChild(player2);
              allTiles[position2].appendChild(token2);
              token2.appendChild(player2);
            }, 500);


            break;

          case 16:
            setTimeout(function(){
              alert("This protective BLACK OBSIDIAN helps you brace yourself because winter is coming. Take five confident steps forward.")
              position2 = position2 + 5;
              token2.removeChild(player2);
              allTiles[position2].appendChild(token2);
              token2.appendChild(player2);
            }, 500);

            break;

          case 20:
            setTimeout(function(){
              alert("You could swear you just spotted a sparkly PYRITE but it turns out it was just a regular BORING GREY STONE. So sure of yourself though, you take three steps backwards to look one more time.")
              position2 = position2 - 3;
              token2.removeChild(player2);
              allTiles[position2].appendChild(token2);
              token2.appendChild(player2);
            }, 500);

            break;

          case 24:
            setTimeout(function(){
              alert("You just picked up a PURPLE AMETHYST which radiates so much calm energy that you fall asleep on the ground and roll two steps back. Sweet dreams!")
              position2 = position2 - 2;
              token2.removeChild(player2);
              allTiles[position2].appendChild(token2);
              token2.appendChild(player2);
            }, 500);


            break;

          case 28:
            setTimeout(function(){
              alert("You just picked up a RAINBOW FLOURITE so powerful that it opens a portal gate in front of you. Curious as you are, you take the stone through the portal and end up five steps behind.")
              position2 = position2 - 5;
              token2.removeChild(player2);
              allTiles[position2].appendChild(token2);
              token2.appendChild(player2);
            }, 500);

            break;
          default:

        }



      if (position2 > 29) {
        localStorage.setItem("Winner", "Player 2");
        winner = player2Character;
        window.open("win.html");
      }

    }, false); // END of PLAYER 2



  }

  boardGame();
