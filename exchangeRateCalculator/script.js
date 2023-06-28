const amountOneEl  = document.getElementById('amount-one');
const amountTwoEl = document.getElementById('amount-two');
const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
//calculate function
function calculate(){
    currOne = currencyOne.value;
    currTwo = currencyTwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/4b721807e0870c66f63e2902/latest/${currOne}`)
    .then(res=>res.json())
    .then(data =>{
        const rate = data.conversion_rates[currTwo];
        rateEl.innerText = `1 ${currOne} is = ${rate} ${currTwo}`;
        amountTwoEl.value = (amountOneEl.value * rate).toFixed(2);
    })
}




//Event listeners
currencyOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
amountOneEl.addEventListener('input',calculate);
amountTwoEl.addEventListener('input',calculate);
swap.addEventListener('click',function(){
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();

});
calculate();