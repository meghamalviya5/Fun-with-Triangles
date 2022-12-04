const angles = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle");
const outputElement = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function checkIsTriangle() {
  var angle1 = Number(angles[0].value);
  var angle2 = Number(angles[1].value);
  var angle3 = Number(angles[2].value);
  const sumOfAngles = calculateSumOfAngles(angle1, angle2, angle3);
  if (sumOfAngles === 180) {
    outputElement.innerText = "Yay! The angles form a triangle";
  } else {
    outputElement.innerText = "Oh Oh! The angles do not form a triangle";
  }
}

isTriangleButton.addEventListener("click", checkIsTriangle);
