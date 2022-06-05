let backgroundColor = 'green';

let backgroundC=['green','black','red','yellow','grey','violet','brown','blue','white','pink'];

function changeBackground(){
    let color = Math.floor(Math.random()*9);
    document.body.style.backgroundColor = backgroundC[color];
    document.getElementById("changetext").textContent="Background: "+backgroundC[color];
   console.log(Math.random());
}