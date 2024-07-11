console.log(
  "----------------------welcome to function in JavaScript------------------"
);

// Normal function

function show(name) {
  console.log(`it's normal function of ${name}`);
}
show("functions");

// function declaration

function calAge(birthYear) {
  const age = 2080 - birthYear;
  return `------------- function declaration ------------- fo age calculator of total age is ${age}`;
}
const totalAgeCal = calAge(2001);
console.log(totalAgeCal);

// function expression

const calAge1 = function (birthYear) {
  const age2 = 2090 - birthYear;
  return `----------- function expression -------- fo age calculator of total age is ${age2}`;
};
const totalAgeCal1 = calAge1(2002);
console.log(totalAgeCal1);

// arrow functions =>

const firstName = (name1) => {
  console.log(`My name is ${name1} ------ arrow functions() => ------`);
};
firstName("Durga");
const yourName = firstName("Durag Prasad Naik");
// console.log(yourName);

// functions calling others functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applesPieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const Juice = ` Juice with ${applesPieces} apples and ${orangesPieces} oranges -------functions calling others functions---------`;
  // console.log(Juice);
  return Juice;
}

// fruitProcessor(4, 5);
console.log(fruitProcessor(6, 9));
const totalPieces = fruitProcessor(7, 6);
console.log(totalPieces);

// immediate invoke function()()

(function year(name6) {
  console.log(`it's  of  ${name6} ----------invoke function()()------------`);
})("function");

// function Hosting
lastName("naik");
function lastName(name2) {
  console.log(
    `enter your name ${name2} its ---------- function hosting ----------`
  );
}
// lastName("naik");
// console.log(lastName("durga"));
