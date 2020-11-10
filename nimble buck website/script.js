
/*----------PARALLAX-----------*/ 
var scene = document.getElementById("scene");
var parallax = new Parallax(scene);


/*----------NAVBAR----------*/ 


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*----------NIGHT-MODE----------*/ 

const slSwitch = 
document.querySelector('sl-switch');

slSwitch.addEventListener('sl-change', () => {

  document.body.classList.toggle('dark');

});

