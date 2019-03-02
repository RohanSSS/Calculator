
let currentNum = "";
let oldNum = "";
let resultNum;
let operator;
console.log("js file exists");

function setNum(num) {
  let view = document.querySelector("#view");
  console.log("set num run");
  if (resultNum) {
    currentNum = num;
    resultNum = "";
  } else if (currentNum.includes(".") && num == ".") {
    console.log("only one decimal point allowed")
  } else {
    currentNum += num;
  }
  view.innerHTML = currentNum;
};

function setOperator(op) {
  console.log("set op run");
  oldNum = currentNum;
  currentNum = "";
  operator = op;
};

function displayNum() {
  let view = document.querySelector("#view");
  console.log("display num run");
  oldNum = parseFloat(oldNum);
  currentNum = parseFloat(currentNum);

  switch (operator) {
    case "plus":
      resultNum = oldNum + currentNum;
      break;
    case "minus":
      resultNum = oldNum - currentNum;
      break;
    case "multiply":
      resultNum = oldNum * currentNum;
      break;
    case "divide":
      resultNum = oldNum / currentNum;
      break;
    default:
      resultNum = currentNum;
  }

  if (!isFinite(resultNum)) {
    if (isNaN(resultNum)) {
      resultNum = "Error: not a number";
    } else {
      resultNum = "Error: cannot divide by zero";
    }
  }
  view.innerHTML = resultNum;
  oldNum = 0;
  currentNum = resultNum;
};

function clearAll() {
  console.log("clear all run")
  let view = document.querySelector("#view");
  oldNum = "";
  currentNum = "";
  view.innerHTML = "0";
};
