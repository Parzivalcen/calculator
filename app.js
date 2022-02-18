// show buttons pressed value on screen
// create buttos 0 to 9, operators, clear and dot
//
// get the buttons value using query selector and event listener
// using for each loop and innerHTML, we get the value of each btn when is clicked
// We append this to our number element <<p>> variable
// then we append the <<p>> to our screen div.

// Show the button value in the screen
const btns = document.querySelectorAll(".btn-c"); //Buttons
const screen = document.querySelector(".screen"); //Screen
let btnValue;
let displayValue = 0;
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
let currentOperand = '';
let previousOperand = '';
console.log(currentOperandTextElement)
let number = document.createElement("p"); //Numbers of Screen
number.classList.add("numArray"); //add class to number
let operationScreen = document.createElement("p"); // show equation on screen
operationScreen.classList.add("operation"); //add class to number

const back = document.querySelector("#delete"); //backspace
const clear = document.querySelector("#clear"); //Clear Screen
let c = 0; // for the operator function
// console.log(btns);

// MAKE CALC WORK VARIABLES
const equal = document.querySelector("#equal");
let signs = document.querySelectorAll(".sign");
let sign;
// for assigment
let a = null;
let b = null;
let result = 0;

// Show the number clicked on screen
btns.forEach((e) => {
  e.addEventListener("click", (event) => {
    append(e.innerHTML);
    onDisplay();
  });
});

function onDisplay() {
  currentOperandTextElement.innerHTML = currentOperand;
  previousOperandTextElement.innerHTML = previousOperand;
  // console.log(displayValue);
  // when num is pressed we want result(think about adding another function for this)
}
// append num and make sure only one dot can be entered
function append(number){
  if(number === '.' && currentOperand.includes('.')) return;
  currentOperand = currentOperand.toString() + number.toString();
}
// When a sign is prlessed the current operand becomes the previous one



// Back Space
// we get the value of the current Operand
// we slice the last number
// we insert the value sliced in the original DOM element
// call it in a add event listener funtion on BUTTON and update the display

back.addEventListener("click", () => {
  backspace();
  onDisplay();
});
//
function backspace() {
  
  currentOperand = currentOperand.slice(
    0,
    currentOperand.length - 1
  );
}

// Clear
// empty current and prvious operand, the sign aswell 

clear.addEventListener("click", () => {
  clearAll();
  onDisplay();
});

function clearAll() {
  currentOperand = ''
  previousOperand = ''
  sign = undefined;
}

// make the calculator work
// the equal sign should call the operator function pressed
// asign functions to the operators buttons, but dont call until equal sign is pressed
// when operator or equal is pressed asign the current value to variable
//
sign = signs.forEach((element) => {
  element.addEventListener("click", () => {
    pressedOperand(element);
    onDisplay()
  });
});
// When a sign is prlessed the current operand becomes the previous one
// store the sign
// if there is a previous operan when sign is pressed, perform an operation
function pressedOperand(element) {
  if(previousOperand !== ''){
    calc()
  }
  previousOperand = currentOperand;
  currentOperand = '';
  sign = element.innerHTML;
  console.log(sign)
}

// Make the calculations
function calc (){
  let prev = parseFloat(previousOperand);
  let current = parseFloat(currentOperand)
  if (sign == "+") {
    result = operate(add, prev, current);
  } else if (sign == "-") {
    result = operate(substract, prev, current);
  } else if (sign == "x") {
    result = operate(multiply, prev, current);
  } else if (sign == "/") {
    result == operate(divide, prev, current);
  }
  currentOperand = result;
}

equal.addEventListener("click", () => {
  equalSign();
  onDisplay();
});

function equalSign() {
  // if sign equals operator, operator equals ==
  calc();
  currentOperand = result;
  previousOperand = '';
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
