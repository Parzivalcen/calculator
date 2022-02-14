// show buttons pressed value on screen
// get the buttons value using query selector and event listener
// We append this to our number element <<p>> variable
// then we append the <<p>> to our screen div.

// Show the button value in the screen
const btns = document.querySelectorAll(".btn-c");
const screen = document.querySelector(".screen");
let number = document.createElement("p");
number.classList.add("numArray");
// console.log(btns);

btns.forEach((e) => {
  e.addEventListener("click", (event) => {
    let btnValue = event.target.innerText;
    btnValue = document.createTextNode(btnValue);
    number.appendChild(btnValue);
    screen.appendChild(number);
    console.log(number.innerHTML);
  });
});

const back = document.querySelector("#delete");
back.addEventListener("click", (event) => {
  backspace();
  // back = document.createTextNode(backspace(number.innerHTML));
  // number.removeChild(btnValue);
  // number.appendChild(back);
});
function backspace() {
  let value = document.querySelector(".numArray").innerHTML;
  document.querySelector(".numArray").innerHTML = value.slice(
    0,
    value.length - 1
  );
}

function showNumber(e) {
  btnValue = e.innerText;
  console.log(btnValue);
}

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
let c = 0;
function operate(operator, a, b) {
  c = operator(a, b);
  return c;
}
// console.log(operate(substract, 8, 2));
