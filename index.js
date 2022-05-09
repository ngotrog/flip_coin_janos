
var randomNumber = Math.floor(Math.random() * 2 + 1);
var randomCoinImage = "coin" + randomNumber + ".svg";
var randomImage = "./images/" + randomCoinImage;
document.querySelector("img").setAttribute("src", randomImage);

function refreshPage() {
  window.location.reload();
}

if (randomNumber === 1) {
  document.querySelector("p").innerHTML = "Head";
} else {
  document.querySelector("p").innerHTML = "Tail";
}

var flipButton = document.querySelector("button");

flipButton.addEventListener("click", refreshPage);

