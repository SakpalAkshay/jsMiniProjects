const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionsBtn = document.getElementById('show-miilions');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calulate-wealth');

let data = [];



async function getRandomUser(){

const res = await fetch('https://randomuser.me/api');
const data = await res.json();
const user = data.results[0]

const newUser ={
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 100000)
}

addData(newUser);

}

// double peoples money
function doubleMoney(){
    data = data.map(item=>{
        return {...item, money: item.money * 2} //mapping back with update
    })
    updateDOM();
}

//function for sorting the richest
function sortData(){
    data.sort((a,b)=> b.money - a.money);
    updateDOM();
}

function showRichest(){
    data = data.filter(user=> user.money > 1000000);
    updateDOM();
}

function calculateWealth(){
    const wealth = data.reduce((acc, user)=> (acc+=user.money),0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML= `<h3> Total Wealth : <strong>${wealth}</strong></h3>`;
    main.appendChild(wealthEl);
}

function addData(obj){
    data.push(obj);
    //updatign the main DOM
    updateDOM();
}

function updateDOM(providedData = data){
    //clear our main
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
 
    providedData.forEach(item =>{
        const element = document.createElement('div');
        element.classList.add('person');//css class we created
        element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;

        //this wont do as we need to append this to the parent which is main
        main.appendChild(element);
    })
}



//adding user event listener
addUserBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click',doubleMoney);
sortBtn.addEventListener('click',sortData);
showMillionsBtn.addEventListener('click', showRichest);
calculateWealthBtn.addEventListener('click', calculateWealth);