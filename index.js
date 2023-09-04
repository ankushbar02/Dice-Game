var loc1 = document.querySelectorAll(".dice>div div");
var loc2 = document.querySelectorAll(".dice2>div div ");
function dot(player, loc) {
  if (player === 1) {
    loc[3].classList.add("invis");
  } else if (player === 2) {
    loc[0].classList.add("invis");
    loc[6].classList.add("invis");
  } else if (player === 3) {
    loc[0].classList.add("invis");
    loc[3].classList.add("invis");
    loc[6].classList.add("invis");
  } else if (player === 4) {
    loc[0].classList.add("invis");
    loc[1].classList.add("invis");
    loc[5].classList.add("invis");
    loc[6].classList.add("invis");
  } else if (player === 5) {
    loc[0].classList.add("invis");
    loc[1].classList.add("invis");
    loc[3].classList.add("invis");
    loc[6].classList.add("invis");
    loc[5].classList.add("invis");
  } else if (player === 6) {
    loc[0].classList.add("invis");
    loc[1].classList.add("invis");
    loc[2].classList.add("invis");
    loc[4].classList.add("invis");
    loc[5].classList.add("invis");
    loc[6].classList.add("invis");
  }
}

document.querySelector("button").addEventListener("click", function () {
  for (let index = 0; index < loc1.length; index++) {
    loc1[index].classList.remove("invis");
    loc2[index].classList.remove("invis");
  }

  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;
  if (player1 > player2) {
    document.querySelector("h2").innerText = "Player 1 Win";
  } else if (player1 < player2) {
    document.querySelector("h2").innerText = "Player 2 Win";
  } else {
    document.querySelector("h2").innerText = "Draw";
  }
  document.querySelector(".p1").innerText = "Player 1: " + player1;
  document.querySelector(".p2").innerText = "Player 2: " + player2;
  dot(player1, loc1);
  dot(player2, loc2);
});
