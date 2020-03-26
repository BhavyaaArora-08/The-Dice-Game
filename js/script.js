const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");

var arr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1]
];

var tried1 = false;
var tried2 = false;
var p1 = p2 = 0;

dice1.addEventListener("click", function() {
  var gen = Math.floor(Math.random() * (5) + 1);
  if (!tried1) {
    dots(dice1, gen);
  }
});

dice2.addEventListener("click", function() {
  var gen = Math.floor(Math.random() * (5) + 1);
  if (!tried2) {
    dots(dice2, gen);
  }
});

function dots(dice, val) {
  switch (val) {
    case 1:
      fun(1, dice);
      break;
    case 2:
      fun(2, dice);
      break;
    case 3:
      fun(3, dice);
      break;
    case 4:
      fun(4, dice);;
      break;
    case 5:
      fun(5, dice);
      break;
    case 6:
      fun(6, dice);
      break;
  }
}

function fun(val, dice) {
  if (dice.id == "dice1") {
    var array = arr[val];
    for (i = 0; i < 9; i++) {
      var query = "#a" + (i + 1);
      var td = document.querySelector(query);
      if (array[i] == 1) {
        td.className = "unhide";
        p1++;
      } else {
        td.className = "hide";
      }
      tried1 = true;
    }
  } else if (dice.id == "dice2") {
    var array = arr[val];
    for (i = 0; i < 9; i++) {
      var query = "#b" + (i + 1);
      var td = document.querySelector(query);
      if (array[i] == 1) {
        td.className = "unhide";
        p2++;
      } else {
        td.className = "hide";
      }
      tried2 = true;
    }
  }

  if (tried1 && tried2) {
    if (p1 > p2) {
      console.log(p1 + " " + p2);
      document.querySelector("h1").innerText = " Player 1 Wins ";
    } else if (p2 > p1) {
      document.querySelector("h1").innerText = " Player 2 Wins ";
    } else {
      p1 = p2 = 0;
      tried1 = false;
      tried2 = false;
    }
  }
}


function again() {
  tried1 = false;
  tried2 = false;
  p1 = p2 = 0;
  for (i = 0; i < 9; i++) {
    var query = "#a" + (i + 1);
    var td = document.querySelector(query);
    td.className = "unhide";
    var query2 = "#b" + (i + 1);
    var td2 = document.querySelector(query2);
    td2.className = "unhide";
    document.querySelector("h1").innerText = " The Dice Game ";
  }

}
