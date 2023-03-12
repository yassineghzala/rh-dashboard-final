// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};




// When the user clicks anywhere outside of the modal, close it




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var x = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block"; document.body.style = "initial";
}

// When the user clicks on <span> (x), close the modal
x.onclick = function () {
  const p = document.getElementById('pa');
  modal.style.display = "none"; p.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; document.body.style = "initial";
  }
}

// annimation logo


//hide and show display for help modall !//





//password verification for modal 'password'//
var is_visible = false;

function see() {
  var input = document.getElementById("p1");
  var see = document.getElementById("see");

  if (is_visible) {
    input.type = 'password';
    is_visible = false;
    see.style.color = 'white';
  }
  else {
    input.type = 'text';
    is_visible = true;
    see.style.color = 'gray';
  }

}
function see1() {
  var input = document.getElementById("p2");
  var see = document.getElementById("see1");

  if (is_visible) {
    input.type = 'password';
    is_visible = false;
    see.style.color = 'white';
  }
  else {
    input.type = 'text';
    is_visible = true;
    see.style.color = 'gray';
  }

}
function see2() {
  var input = document.getElementById("p3");
  var see = document.getElementById("see2");

  if (is_visible) {
    input.type = 'password';
    is_visible = false;
    see.style.color = 'white';
  }
  else {
    input.type = 'text';
    is_visible = true;
    see.style.color = 'gray';
  }

}

function check() {
  var ch = f.p1.value;
  var ch1 = f.p2.value;
  var ch3 = f.p3.value;
  const div = document.getElementById('test');
  const p = document.getElementById('pa');
  const div1 = document.getElementById('test1');
  const pa1 = document.getElementById('pa1');
  const div2 = document.getElementById('test3');
  const pa2 = document.getElementById('pa2');
  const div3 = document.getElementById('test4');
  const pa3 = document.getElementById('pa3');



  if (ch == 0) { div.style.display = 'block'; p.style.display = 'block'; }
  else { div.style.display = "none"; p.style.display = 'none'; }
  if (ch1 == 0) { pa1.style.display = 'block'; }
  else { pa1.style.display = 'none'; }
  if (ch3 == 0) { pa2.style.display = 'block'; }
  else { pa2.style.display = 'none'; }
  if (ch3 != ch1) { pa3.style.display = 'block'; } else { pa3.style.display = 'none'; }

}
