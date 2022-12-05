var base = document.querySelector("#base");
var height = document.querySelector("#height");
var calculateAreaBtn = document.querySelector("#calculate-area-btn");
var outputBox = document.querySelector("#output");

function calculateArea() {
  var baseValue = Number(base.value);
  var heightValue = Number(height.value);
  var area = (1 / 2) * baseValue * heightValue;
  outputBox.innerText = "Area of a Triangle is " + area;
}

calculateAreaBtn.addEventListener("click", calculateArea);
