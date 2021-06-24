var c=document.querySelectorAll('.container');
const seats=document.querySelectorAll('.rows.seat:not(.occupied');
const count=document.getElementById('count');
const total=document.getElementById('total');
let ticket=250;
var i = c.length;
let num=0;
while (i--)
{
    c[i].addEventListener('click', (e) => {
        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
          e.target.classList.remove('available');
          num+=1;
          count.innerText = num;
          document.getElementById("total").innerHTML = num*ticket;
        }
      });
}




 