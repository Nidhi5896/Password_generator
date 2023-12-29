const inputSlider= document.querySelector("[data-lengthSlider]")
const lengthDisplay=document.querySelector("[data-lengthNumber]")
const passwordDisplay= document.querySelector("[data-passwordDiaplay]")
const copyBtn=document.queryselSelector("[data-copy]")
const copyMsg= document.querySelector("[data-copyMsg]")
const uppercaseCheck=document.querySelector("#uppercase")
const lowercaseCheck= document.querySelector("#lowercase")
const symbolCheck= document.querySelector("#symbols")
const indicator=document.querySelector("[data-indicator]")
const generator= document.querySelector(".generateButtton")
const allCheck= document.querySelector("input[type=checkbox]")
const numbersCheck=document.querySelector("#numbers")

let password="";
let passwordLength=10;
let checkCount=1;
// set strength circle color is grey

//set passwordLength
function handleSlider(){
           inputSlider.value= passwordLength;
           lengthDisplay.innerText=inputSlider.value;
}
handleSlider();
function setIndicator(color){
    indicator.style.backgroundColor=color;
    //shadow
}

function getRndInteger(min,max){
    
}
