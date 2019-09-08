var player1Character = "";
var player2Character = "";
var player1Card = document.getElementById('player1-card');
var player2Card = document.getElementById('player2-card');

// SELECTING CHARACTERS

  // JON SNOW
  document.getElementById('jonsnow').addEventListener("click", function(){
    player1Character = "Jon Snow";
    if (player1Character === "Jon Snow") {
      localStorage.setItem("player1Character","JS");

      // Connect to api and convert to json format
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
        player1Card.innerHTML= "<img src=\"characters/crystal-icon.png\" class=\"card-icon\"> <div class=\"card-info\"> Name: " + character[i].name + "<br> Gender: " + character[i].gender + "<br> Culture: " + character[i].culture + "</div>";
        player1Card.style.backgroundImage = "url('characters/jonsnow.jpg')";
        player1Card.style.backgroundSize = "cover";
      }
    }
  });


  // KHAL DROGO
  document.getElementById('khaldrogo').addEventListener("click", function(){
    player1Character = "Khal Drogo";
    if (player1Character === "Khal Drogo") {
      localStorage.setItem("player1Character","KD");
      // Connect to api and convert to json format
      fetch('https://www.anapioficeandfire.com/api/characters?name=drogo')
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
        player1Card.innerHTML= "<img src=\"characters/crystal-icon.png\" class=\"card-icon\"> <div class=\"card-info\"> Name: " + character[i].name + "<br> Gender: " + character[i].gender + "<br> Culture: " + character[i].culture + "</div>";
        player1Card.style.backgroundImage = "url('characters/khaldrogo.jpg')";
        player1Card.style.backgroundSize = "cover";
      }
    }
  });


  // GREY WORM
  document.getElementById('greyworm').addEventListener("click", function(){
    player1Character = "Grey Worm";
    if (player1Character === "Grey Worm") {
      localStorage.setItem("player1Character","GW");
      // Connect to api and convert to json format
      fetch('https://www.anapioficeandfire.com/api/characters?name=grey+worm')
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
        player1Card.innerHTML= "<img src=\"characters/crystal-icon.png\" class=\"card-icon\"> <div class=\"card-info\"> Name: " + character[i].name + "<br> Gender: " + character[i].gender + "<br> Culture: " + character[i].culture + "</div>";
        player1Card.style.backgroundImage = "url('characters/greyworm.jpg')";
        player1Card.style.backgroundSize = "cover";
      }
    }
  });



  // TORMUND
  document.getElementById('tormund').addEventListener("click", function(){
    player1Character = "Tormund";
    if (player1Character === "Tormund") {
      localStorage.setItem("player1Character","TG");
      // Connect to api and convert to json format
      fetch('https://www.anapioficeandfire.com/api/characters?name=tormund')
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
        player1Card.innerHTML= "<img src=\"characters/crystal-icon.png\" class=\"card-icon\"> <div class=\"card-info\"> Name: " + character[i].name + "<br> Gender: " + character[i].gender + "<br> Culture: " + character[i].culture + "</div>";
        player1Card.style.backgroundImage = "url('characters/tormund.jpg')";
        player1Card.style.backgroundSize = "cover";
      }
    }
  });


  // VISERYS
  document.getElementById('viserys').addEventListener("click", function(){
    player1Character = "Viserys";
    if (player1Character === "Viserys") {
      localStorage.setItem("player1Character","VT");
      // Connect to api and convert to json format
      fetch('https://www.anapioficeandfire.com/api/characters?name=viserys+targaryen')
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
        player1Card.innerHTML= "<img src=\"characters/crystal-icon.png\" class=\"card-icon\"> <div class=\"card-info\"> Name: " + character[i].name + "<br> Gender: " + character[i].gender + "<br> Culture: " + character[i].culture + "</div>";
        player1Card.style.backgroundImage = "url('characters/viserys.jpg')";
        player1Card.style.backgroundSize = "cover";
      }
    }
  });


  // DAENERYS
  document.getElementById('daenerys').addEventListener("click", function(){
    player2Character = "Daenerys";
    if (player2Character === "Daenerys") {
      localStorage.setItem("player2Character","DT");
      // Connect to api and convert to json format
      fetch('https://www.anapioficeandfire.com/api/characters?name=daenerys+targaryen')
      .then((response) => {
          return response.json();
      })
      .then((result) => {
          showCard(result);
      })
      .catch(error => console.log(error))
    } else {
      localStorage.removeItem("player2Character");
    }

    // append to card
    function showCard(response) {
      var character = response;
      for (var i = 0; i < character.length; i++) {
        player2Card.innerHTML= "<img src=\"characters/crystal-icon2.png\" class=\"card-icon\"> <div class=\"card-info\"> Name: " + character[i].name + "<br> Gender: " + character[i].gender + "<br> Culture: " + character[i].culture + "</div>";
        player2Card.style.backgroundImage = "url('characters/daenerys.jpg')";
        player2Card.style.backgroundSize = "cover";
      }
    }
  });


  // ARYA
  document.getElementById('arya').addEventListener("click", function(){
    player2Character = "Arya";
    if (player2Character === "Arya") {
      localStorage.setItem("player2Character","AS");
      // Connect to api and convert to json format
      fetch('https://www.anapioficeandfire.com/api/characters?name=arya+stark')
      .then((response) => {
          return response.json();
      })
      .then((result) => {
          showCard(result);
      })
      .catch(error => console.log(error))
    } else {
      localStorage.removeItem("player2Character");
    }

    // append to card
    function showCard(response) {
      var character = response;
      for (var i = 0; i < character.length; i++) {
        player2Card.innerHTML= "<img src=\"characters/crystal-icon2.png\" class=\"card-icon\"> <div class=\"card-info\"> Name: " + character[i].name + "<br> Gender: " + character[i].gender + "<br> Culture: " + character[i].culture + "</div>";
        player2Card.style.backgroundImage = "url('characters/arya.jpg')";
        player2Card.style.backgroundSize = "cover";
      }
    }
  });


  // SANSA
  document.getElementById('sansa').addEventListener("click", function(){
    player2Character = "Sansa";
    if (player2Character === "Sansa") {
      localStorage.setItem("player2Character","SS");
      // Connect to api and convert to json format
      fetch('https://www.anapioficeandfire.com/api/characters?name=sansa+stark')
      .then((response) => {
          return response.json();
      })
      .then((result) => {
          showCard(result);
      })
      .catch(error => console.log(error))
    } else {
      localStorage.removeItem("player2Character");
    }

    // append to card
    function showCard(response) {
      var character = response;
      for (var i = 0; i < character.length; i++) {
        player2Card.innerHTML= "<img src=\"characters/crystal-icon2.png\" class=\"card-icon\"> <div class=\"card-info\"> Name: " + character[i].name + "<br> Gender: " + character[i].gender + "<br> Culture: " + character[i].culture + "</div>";
        player2Card.style.backgroundImage = "url('characters/sansa.jpg')";
        player2Card.style.backgroundSize = "cover";
      }
    }
  });


  // MISSANDEI
  document.getElementById('missandei').addEventListener("click", function(){
    player2Character = "Missandei";
    if (player2Character === "Missandei") {
      localStorage.setItem("player2Character","M");
      // Connect to api and convert to json format
      fetch('https://www.anapioficeandfire.com/api/characters?name=missandei')
      .then((response) => {
          return response.json();
      })
      .then((result) => {
          showCard(result);
      })
      .catch(error => console.log(error))
    } else {
      localStorage.removeItem("player2Character");
    }

    // append to card
    function showCard(response) {
      var character = response;
      for (var i = 0; i < character.length; i++) {
        player2Card.innerHTML= "<img src=\"characters/crystal-icon2.png\" class=\"card-icon\"> <div class=\"card-info\"> Name: " + character[i].name + "<br> Gender: " + character[i].gender + "<br> Culture: " + character[i].culture + "</div>";
        player2Card.style.backgroundImage = "url('characters/missandei.jpg')";
        player2Card.style.backgroundSize = "cover";
      }
    }
  });


  // MARGAERY
  document.getElementById('margaery').addEventListener("click", function(){
    player2Character = "Margaery";
    if (player2Character === "Margaery") {
      localStorage.setItem("player2Character","MT");
      // Connect to api and convert to json format
      fetch('https://www.anapioficeandfire.com/api/characters?name=margaery+tyrell')
      .then((response) => {
          return response.json();
      })
      .then((result) => {
          showCard(result);
      })
      .catch(error => console.log(error))
    } else {
      localStorage.removeItem("player2Character");
    }

    // append to card
    function showCard(response) {
      var character = response;
      for (var i = 0; i < character.length; i++) {
        player2Card.innerHTML= "<img src=\"characters/crystal-icon2.png\" class=\"card-icon\"> <div class=\"card-info\"> Name: " + character[i].name + "<br> Gender: " + character[i].gender + "<br> Culture: " + character[i].culture + "</div>";
        player2Card.style.backgroundImage = "url('characters/margaery.jpg')";
        player2Card.style.backgroundSize = "cover";
      }
    }
  });
