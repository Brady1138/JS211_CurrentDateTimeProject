// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numToString = () => {
  let num = 15;
  let text = num.toString();

  console.log(text, num)

  document.getElementById("num-to-str").innerHTML = (`The typeof ${text} is ${typeof text}`)
  // (text)
  // ("The typeof" + text + " is " (typeof text))

  return text
  console.log(text) // won't work after a return statement
}

// Write a JavaScript program to convert a string to the number.
let myNum = "10";
let myInteger = parseInt(myNum);

console.log(myInteger);

document.getElementById("str-to-num").innerHTML = (`The typeof ${myNum} is ${typeof myInteger}`)



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  function myDatatype = (myInput) => {
    if (myInput == Boolean) {
      console.log("Boolean");
    }
    
    else if (myInput == Null) {
      console.log("Null")
    } else if (myInput == Undefined){
      console.log("Undefined")
    } else if (myInput == Number) {
      console.log("Number")
    } else if (myInput == NaN) {
      console.log("NaN")
    } else if (myInput == String) {
      console.log("String")
    }
  }
  myDatatype(true);
  document.getElementById("datatypes").innerHTML = (`This is a ${typeof myInput}`)
  
// Write a JavaScript program that adds 2 numbers together.
          // AND

let thisInput1 = 25;
let thisInput2 = 30;

function addingNums = (thisInput1, thisInput2) => {
  let sumTotal = thisInput1 + thisInput2;
  console.log(sumTotal);
}
addingNums(thisInput1, thisInput2);

document.getElementById("numberAddition").innerHTML = (`The total is ${addingNums}`)

// Write a JavaScript program that runs only when 2 things are true.

let thisOption1 = 5;
let thisOption2 = 0;

function twoTrue = (thisOption1, thisOption2) => {

if (thisOption1 && thisOption2) {
  return true;
} else {
  return false;
}
}
document.getElementById("bothAreTrue").innerHTML = (`This is ${twoTrue}`)

// Write a JavaScript program that runs when 1 of 2 things are true.
let thisSelection1 = 5;
let thisSelection2 = 0;

function oneBeingTrue = (thisSelection1, thisSelection2) => {

if (thisSelection1 || thisSelection2) {
  return true;
} else {
  return false;
}
}

document.getElementById("oneIsTrue").innerHTML = (`Only one is ${oneBeingTrue}`)


// Write a JavaScript program that runs when both things are not true.  

let thisPick1 = 0;
let thisPick2 = 0;

function neitherBeingTrue = (thisPick1, thisPick2) => {
if (thisPick1 && thisPick2) {
  return false;
} else {
  return true;
}
}

document.getElementById("neitherTrue").innerHTML = (`This is ${neitherBeingTrue}`)
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
