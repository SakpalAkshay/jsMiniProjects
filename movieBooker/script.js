const movie = document.getElementById('movie');
const count = document.getElementById('count');
const total = document.getElementById('total');
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

let ticketPrice = +movie.value;

populateUI();
//populating the UI with data stored in local storage
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeatsIndex'));

    if (selectedSeats!==null & selectedSeats.length >0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.addClassList('selected');
                
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('movieIndex');
    if (selectedMovieIndex!==null){

        movie.selectedIndex = selectedMovieIndex;
    }

}



//calculating count and price
function calculatingSelected(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    //using localStorgae to store seat index
    const seatIndex = [...selectedSeats].map((seat)=>{
    [...seats].indexOf(seat)});
    
    //storing in local storage
    localStorage.setItem('selectedSeatsIndex', JSON.stringify(seatIndex)); //local storage only stores strings not arrays


    const selectedCount = selectedSeats.length;
    count.innerText = selectedCount;
    total.innerText = selectedCount * ticketPrice;
}

//saves movie tickets and price to localStorage to that value doesnt go away on refresh
function saveSelectedMovieAndPrice(movieIndex, moviePrice){
    localStorage.setItem('movieIndex',movieIndex); //no need to JSON stringfy as value is already string
    localStorage.setItem('moviePrice', moviePrice);
}


//event listenrs

movie.addEventListener('change', (e)=>{
    //$(".container .row .seat").removeClass("selected");
    ticketPrice = +e.target.value;
    saveSelectedMovieAndPrice(e.target.selectedIndex, e.target.value);
    calculatingSelected();
});


container.addEventListener('click',(e)=>{

    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
{
    e.target.classList.toggle('selected');

    calculatingSelected();
}

}
);

calculatingSelected();
