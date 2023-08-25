const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

//EventListerners

jokeBtn.addEventListener('click',generateJoke)





//This was using Promises 
function generateJoke() {
  const config = {
    headers: {
      'Accept': "application/json",
    },
  }
  fetch("https://icanhazdadjoke.com/", config).then((res)=> res.json()).then((data)=>{
     jokeElement.innerHTML = data.joke 
  
  });
}
