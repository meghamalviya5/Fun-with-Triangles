var sides = document.querySelectorAll(".side-input");
var calculateHypotenuseBtn = document.querySelector(
  "#calculate-hypotenuse-btn"
);
var outputBox = document.querySelector("#output");

function sumOfSquareOfSides(side1, side2) {
  const sum = side1 * side1 + side2 * side2;
  return sum;
}

function calculateHypotenuse() {
  var side1 = Number(sides[0].value);
  var side2 = Number(sides[1].value);
  const sum = sumOfSquareOfSides(side1, side2);

  var hypotenuse = Math.sqrt(sum);
  outputBox.innerText = "Hypotenuse of a Triangle is " + hypotenuse;
}

calculateHypotenuseBtn.addEventListener("click", calculateHypotenuse);
