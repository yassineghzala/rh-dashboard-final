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
  navigation.classList.toggle("active1");
  main.classList.toggle("active1");
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



  if (ch.length == 0) { div.style.display = 'block'; p.style.display = 'block'; }
  else { div.style.display = "none"; p.style.display = 'none'; }
  if (ch1.length == 0) { pa1.style.display = 'block'; }
  else { pa1.style.display = 'none'; }
  if (ch3.length == 0) { pa2.style.display = 'block'; }
  else { pa2.style.display = 'none'; }
  if (ch3 != ch1) { pa3.style.display = 'block'; } else { pa3.style.display = 'none'; }

}

// Get DOM Elements

const modal11 = document.querySelector('#my-modal1');
const modalBtn1 = document.querySelector('#sign');

const closeBtn1 = document.querySelector('.close1');

// Events
modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);
window.addEventListener('click', outsideClick1);

// Open
function openModal1() {
  modal11.style.display = 'block';
}

// Close
function closeModal1() {
  modal11.style.display = 'none'; document.body.style = "initial"
}

// Close If Outside Click
function outsideClick1(e) {
  if (e.target == modal11) {
    modal11.style.display = 'none'; document.body.style = "initial"
  }
}
const modal11S = document.querySelector('#my-modal1S');
const modalBtn1S = document.querySelector('#modal-btnS');

const closeBtn2 = document.querySelector('.close1');

// Events
modalBtn1S.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
window.addEventListener('click', outsideClick2);

// Open
function openModal2() {
  modal11S.style.display = 'block';
}

// Close
function closeModal2() {
  modal11S.style.display = 'none'; document.body.style = "initial"
}

// Close If Outside Click
function outsideClick2(e) {
  if (e.target == modal11S) {
    modal11S.style.display = 'none'; document.body.style = "initial"
  }
}


let myContribCard=document.querySelector(".contrib-card")
myContribCard.addEventListener("click", e=> {
  document.querySelector(".changeContrib").style.cssText="transform : rotateY(0deg) translateX(-50%)"
    document.querySelector(".done-change").addEventListener("click", e=> {
      
      let myAmount=document.querySelector("#new-amount");
      let myReason=document.querySelector("#new-reason");
      myAmount.focus()

      document.querySelector(".total-amount").innerHTML=`${+myAmount.value+Number(document.querySelector(".total-amount").innerHTML)}`;
      document.querySelector(".changeContrib").style.cssText="transform : rotateY(90deg) translateX(-50%)";
    })
})
var modala = document.getElementById("myModal_modify");

                
            var btn1 = document.getElementById("modify_member");


            var span1 = document.getElementsByClassName("close3")[0];
            btn1.onclick = function() {
                modala.style.display = "block";
            }
            span1.onclick = function() {
                modala.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modala) {
                    modala.style.display = "none";
                }
            }


            var modalb = document.getElementById("myModal_delete");

    
            var btn2 = document.getElementById("delete_member");


            var span2 = document.getElementsByClassName("close2")[0];
            btn2.onclick = function() {
                modalb.style.display = "block";
            }
            span2.onclick = function() {
                modalb.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modalb) {
                    modalb.style.display = "none";
                }
            }


            var modald = document.getElementById("myModal_add");

    
            var btn4 = document.getElementById("add_member");


            var span4 = document.getElementsByClassName("close5")[0];
            btn4.onclick = function() {
                modald.style.display = "block";
            }
            span4.onclick = function() {
                modald.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modald) {
                    modald.style.display = "none";
                }
            }

            var modalc = document.getElementById("my-modal1S");

    
            var btn3 = document.getElementById("modal-btnS");


            var span3 = document.getElementsByClassName("close4")[0];
            btn3.onclick = function() {
                modalc.style.display = "block";
            }
            span3.onclick = function() {
                modalc.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modalc) {
                    modalc.style.display = "none";
                }
            }


            