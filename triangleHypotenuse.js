var sides = document.querySelectorAll(".side-input");
var calculateHypotenuseBtn = document.querySelector(
  "#calculate-hypotenuse-btn"
);
var outputBox = document.querySelector("#output");

function validateInput(side1, side2) {
  var message = "";
  if (side1 === "" || side2 === "") {
    message = "Please provide both the values.";
  } else if (Number(side1) < 0 || Number(side2) < 0) {
    message = "Please enter positive values for both sides.";
  } else {
    return [true, ""];
  }
  return [false, message];
}

function sumOfSquareOfSides(side1, side2) {
  const sum = side1 * side1 + side2 * side2;
  return sum;
}

function calculateHypotenuse() {
  var side1 = sides[0].value;
  var side2 = sides[1].value;
  var [flag, validationMessage] = validateInput(side1, side2);
  if (flag) {
    side1 = Number(sides[0].value);
    side2 = Number(sides[1].value);
    const sum = sumOfSquareOfSides(side1, side2);

    var hypotenuse = Math.sqrt(sum);
    outputBox.innerText =
      "Hypotenuse of a Triangle is " + hypotenuse.toFixed(2);
  } else {
    outputBox.innerText = validationMessage;
  }
}

calculateHypotenuseBtn.addEventListener("click", calculateHypotenuse);
