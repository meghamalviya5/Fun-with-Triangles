const angles = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle");
const outputElement = document.querySelector("#output");

function validateInput(angle1, angle2, angle3) {
  var message = "";
  if (angle1 === "" || angle2 === "" || angle3 === "") {
    message = "Please provide all the three angles.";
  } else if (Number(angle1) < 0 || Number(angle2) < 0 || Number(angle3) < 0) {
    message = "Please enter positive values for all the angles.";
  } else {
    return [true, ""];
  }
  return [false, message];
}

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function checkIsTriangle() {
  var angle1 = angles[0].value;
  var angle2 = angles[1].value;
  var angle3 = angles[2].value;
  var [flag, validationMessage] = validateInput(angle1, angle2, angle3);
  if (flag) {
    angle1 = Number(angles[0].value);
    angle2 = Number(angles[1].value);
    angle3 = Number(angles[2].value);
    const sumOfAngles = calculateSumOfAngles(angle1, angle2, angle3);
    if (sumOfAngles === 180) {
      outputElement.innerText = "Yay! The angles form a triangle";
    } else {
      outputElement.innerText = "Oh Oh! The angles do not form a triangle";
    }
  } else {
    outputElement.innerText = validationMessage;
  }
}

isTriangleButton.addEventListener("click", checkIsTriangle);
