var base = document.querySelector("#base");
var height = document.querySelector("#height");
var calculateAreaBtn = document.querySelector("#calculate-area-btn");
var outputBox = document.querySelector("#output");

function validateInput(base, height) {
  var message = "";
  if (base === "" || height === "") {
    message = "Please provide both the values.";
  } else if (Number(base) < 0 || Number(height) < 0) {
    message = "Please enter positive values for both base and height.";
  } else {
    return [true, ""];
  }
  return [false, message];
}

function calculateArea() {
  var baseValue = base.value;
  var heightValue = height.value;
  baseValue = Number(base.value);
  heightValue = Number(height.value);
  var [flag, validationMessage] = validateInput(side1, side2);
  if (flag) {
    var area = (1 / 2) * baseValue * heightValue;
    outputBox.innerText = "Area of a Triangle is " + area;
  } else {
    outputBox.innerText = validationMessage;
  }
}

calculateAreaBtn.addEventListener("click", calculateArea);
