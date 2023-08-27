// lets fetch values

const resultEl = document.getElementById('result');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const lengthEl = document.getElementById('length');
  
//event listerner

generateEl.addEventListener('click',()=>{
    const length = +lengthEl.value;
    const upper = uppercaseEl.checked;
    const lower = lowercaseEl.checked;
    const num = numberEl.checked;
    const symb = symbolEl.checked;
    console.log(length,upper,lower,num,symb);
});

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    symbol: getRandomSymbol,
    number: getRandomNumber
}


function getRandomUpper(){
    return String.fromCharCode((Math.floor(Math.random()*26)+ 65) )
}

function getRandomLower(){
    return String.fromCharCode((Math.floor(Math.random()*26)+ 97) )
}

function getRandomNumber(){
    return String.fromCharCode((Math.floor(Math.random()*26)+ 65) )
}

function getRandomSymbol(){
   let symbols = "!@#$%^&*()_-<>";
   return symbols[Math.floor(Math.random() * symbols.length)];
}
