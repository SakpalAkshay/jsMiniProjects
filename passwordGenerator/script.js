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

    resultEl.innerHTML = generatePassword(upper,lower,symb,num,length);

});


clipboardEl.addEventListener('click',()=>{

    const textarea = document.createElement('textarea');
    const pass = resultEl.innerText;
    textarea.value = pass;
    // we can only copy something until it has been added to body
    document.body.appendChild(textarea);
    textarea.select(); //select the text present inside
    document.execCommand('copy');
    textarea.remove();
    alert("Password copied to clipboard!");

});

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    symb: getRandomSymbol,
    num: getRandomNumber,
}


function generatePassword(upper,lower,symb,num,length){
    let generatedPassword = '';

    const typesCount = upper + lower + symb + num;
    const typesArray = [{upper},{lower},{symb},{num}].filter(item=>Object.values(item)[0]);
    if(typesCount===0){
        return ''
    }

    for(let i =0;i<length;i+=typesCount){

        typesArray.forEach(type =>{
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    } 
    const finalPassword = generatedPassword.slice(0,length);
    return finalPassword;
}



function getRandomUpper(){
    return String.fromCharCode((Math.floor(Math.random()*26)+ 65) );
}

function getRandomLower(){
    return String.fromCharCode((Math.floor(Math.random()*26)+ 97) );
}

function getRandomNumber(){
    return String.fromCharCode((Math.floor(Math.random()*10)+ 48) );
}

function getRandomSymbol(){
   let symbols = "!@#$%^&*()_-<>";
   return symbols[Math.floor(Math.random() * symbols.length)];
}
