
let currentNum = "";
let oldNum = "";
let resultNum;
let operator;

function setNum(num) {
  let view = document.querySelector("#view");
  if (resultNum) {
    var currentNum = num;
    var resultNum = "";
  } else if (currentNum.includes(".") && num == ".") {
  } else {
    var currentNum += num;
  }
  view.innerHTML = currentNum;
};

function setOperator(op) {
  var oldNum = currentNum;
  var currentNum = "";
  var operator = op;
};

function displayNum() {
  let view = document.querySelector("#view");
  var oldNum = parseFloat(oldNum);
  var currentNum = parseFloat(currentNum);

  switch (operator) {
    case "plus":
      var resultNum = oldNum + currentNum;
      break;
    case "minus":
      var resultNum = oldNum - currentNum;
      break;
    case "multiply":
      var resultNum = oldNum * currentNum;
      break;
    case "divide":
      var resultNum = oldNum / currentNum;
      break;
    default:
      var resultNum = currentNum;
  }

  if (!isFinite(resultNum) && isNaN(resultNum)) {
    var resultNum = "Error: not a number";
  } else {
    var resultNum = "Error: cannot divide by zero";
  }
  
  const view.innerHTML = resultNum;
  let oldNum = 0;
  let currentNum = resultNum;
};

function clearAll() {
  let view = document.querySelector("#view");
  var oldNum = "";
  var currentNum = "";
  var view.innerHTML = "0";
  console.log("z" + "u" + "b" + "z");
};
