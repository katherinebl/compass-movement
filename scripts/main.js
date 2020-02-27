'use strict'

const needle = document.getElementsByClassName('needle');
document.onmousemove = function(){
//event.clientX => get the horizontal coordinate of the mouse
//window.innerWidth => get the browser width
  let x = event.clientX * 100 / window.innerWidth + "%";
  console.log('esto es x: ', x);

//event.clientY => get the Vertical coordinate of the mouse
//window.innerHeight => get the browser height
  let y = event.clientY * 100 / window.innerHeight + "%";
  console.log('esto es y: ', y);
  
  for (let i=0; i<1; i++){
    console.log('needle: ', needle);
    needle[i].style.left = x;
    needle[i].style.top = y;
    //Prevents the balls from getting out of their orbit
    // needle[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}