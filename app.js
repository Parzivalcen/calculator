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
let number = document.createElement("p"); //Numbers of Screen
number.classList.add("numArray"); //add class to number
const back = document.querySelector("#delete"); //backspace
const clear = document.querySelector("#clear"); //Clear Screen
let c = 0; // for the operator function
// console.log(btns);

btns.forEach((e) => {
  e.addEventListener("click", (event) => {
    btnValue = event.target.innerHTML;
    btnValue = document.createTextNode(btnValue);
    number.appendChild(btnValue);
    screen.appendChild(number);
    displayValue = number.innerHTML;
    // console.log(displayValue);
  });
});

// Back Space
// we get the value of the number (div .screen) > (.numArray "p")
// we slice the last number
// we insert the value sliced in the original DOM element
// call it in a add event listener funtion on BUTTON.

back.addEventListener("click", () => {
  backspace();
});
//
function backspace() {
  let value = document.querySelector(".numArray").innerHTML;
  document.querySelector(".numArray").innerHTML = value.slice(
    0,
    value.length - 1
  );
}

// Clear
// Delete the (number <<p>>) valriable

clear.addEventListener("click", () => {
  clearAll();
});

function clearAll() {
  document.querySelector(".numArray").innerHTML = "";
}

// make the calculator work
// the equal sign should call the operator function pressed
// asign functions to the operators buttons, but dont call until equal sign is pressed
// when operator or equal is pressed asign the current value to variable
// 
// SHOW OPERATOR 
const equal = document.querySelector("#equal");
let signs = document.querySelectorAll(".sign");
let sign;
// for assigment
let a = 1;
let b = 5;
sign = signs.forEach((element) => {
  element.addEventListener("click", () => {
    sign = element.innerHTML;
    a = +number.innerHTML; // assign diplay value to a variable and cleared, so can introduce the b variable 
    clearAll()
    console.log(a)
    // console.log(typeof sign);
  });
});
equal.addEventListener("click", () => {
  // if sign equals operator, operator equals ==
  let result = 0;
  b = +number.innerHTML;//assign display value to second variable and cleared so result can be shown 
  console.log(b)
  clearAll();
  if (sign == "+") {
    result = operate(add, a, b);
  }else if(sign == '-'){
    result = operate(substract, a, b);
  }else if (sign == 'x'){
    result = operate(multiply, a, b);
  }else if(sign == '/'){
    result == operate(divide, a, b);
  }
  document.querySelector(".numArray").innerHTML = result;

  console.log(result);
});
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
