// show buttons pressed value on screen
// create buttos 0 to 9, operators, clear and dot
//
// get the buttons value using query selector and event listener
// using for each loop and innerHTML, we get the value of each btn when is clicked
// We append this to our number element current operand
// show current operand on screen

// Show the button value in the screen
const btns = document.querySelectorAll(".btn-c"); //Buttons

const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
// for assigment
let currentOperand = "";
let previousOperand = "";
let result = 0;

const back = document.querySelector("#delete"); //backspace
const clear = document.querySelector("#clear"); //Clear Screen

// MAKE CALC WORK VARIABLES
const equal = document.querySelector("#equal");
let signs = document.querySelectorAll(".sign");
let sign;

// Show the number clicked on screen
btns.forEach((e) => {
  e.addEventListener("click", (event) => {
    append(e.innerHTML);
    onDisplay();
  });
});

function onDisplay() {
  currentOperandTextElement.innerHTML = currentOperand;
  // show operator
  if (sign != null) {
    previousOperandTextElement.innerHTML = `${previousOperand} ${sign}`;
  } else {
    previousOperandTextElement.innerHTML = "";
  }
}

clear.addEventListener("click", () => {
  clearAll();
  onDisplay();
});

// Back Space
// we get the value of the current Operand
// we slice the last number
// we insert the value sliced in the original DOM element
// call it in a add event listener funtion on BUTTON and update the display
back.addEventListener("click", () => {
  backspace();
  onDisplay();
});

// any sign should call the calc function when pressed and previous is not empty
// asign functions to the operators buttons, but dont call until equal sign is pressed
// when operator or equal is pressed asign the current value to curren operator var
//
sign = signs.forEach((element) => {
  element.addEventListener("click", () => {
    pressedOperand(element);
    onDisplay();
  });
});

equal.addEventListener("click", () => {
  calc();
  onDisplay();
});

// append num and make sure only one dot can be entered
function append(number) {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand = currentOperand.toString() + number.toString();
}
// When a sign is prlessed the current operand becomes the previous one

//
function backspace() {
  currentOperand = currentOperand.slice(0, currentOperand.length - 1);
}

// Clear
// empty current and prvious operand, the sign aswell
function clearAll() {
  currentOperand = "";
  previousOperand = "";
  result = 0;
  sign = undefined;
}

// When a sign is prlessed the current operand becomes the previous one
// store the sign
// if there is a previous operand when sign is pressed, perform an operation
function pressedOperand(element) {
  if (previousOperand !== "") {
    calc();
  }
  previousOperand = currentOperand;
  currentOperand = "";
  sign = element.innerHTML;
  console.log(sign);
}

// Make the calculations
function calc() {
  // handle if = is pressed early
  if (!previousOperand) {
    return currentOperand;
  }
  if (!currentOperand) {
    return previousOperand;
  }
  let prev = parseFloat(previousOperand);
  let current = parseFloat(currentOperand);
  // check if trying to divide by zero
  if (sign == "/" && current == 0) {
    previousOperand = "";
    sign = undefined;
    return (currentOperand = "you tried dividing by zero");
  }

  if (sign == "+") {
    result = operate(add, prev, current);
  } else if (sign == "-") {
    result = operate(substract, prev, current);
  } else if (sign == "x") {
    result = operate(multiply, prev, current);
  } else if (sign == "/") {
    result = operate(divide, prev, current);
  }
  result = result.toString();
  if (result.length > 5) {
    result = result.slice(0, 8);
  }
  currentOperand = result;
  previousOperand = "";
  sign = undefined;
}

// console.log(equal);

// Calculator
// Create add function
// Create a variable sum inside the function
// Do a for loop that goes over every item of the arguments
// sum the previous one to the next one
// return the sum of the numbers

function add(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
}

// substract
// create substract function
// create a variable sub

function substract(...args) {
  let sub = 0;
  a = args[0];
  b = args[1];
  sub = a - b;
  return sub;
}

// Multiply
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, a, b) {
  c = operator(a, b);
  return c;
}
// console.log(operate(substract, 8, 2));
