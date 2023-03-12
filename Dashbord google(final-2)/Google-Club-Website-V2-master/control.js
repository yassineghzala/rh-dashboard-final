//THIS FILE ISN'T PART OF THE PROJECT , IT'S JUST FOR ME TO PRACTICE//
function checkmail(ch) {
    if (ch.length==0) {
        return false
    }
    if (ch.indexOf("@")==-1) {
        return false;
    }
    if (ch.indexOf("@")>ch.lastIndexOf(".")) {
        return false;
    }
    return true;
}
function checkpass (ch) {
    if (ch.length<8) {
        return false
    }
    if (ch.charAt(0).toUpperCase()!=ch.charAt(0)) {
        return false
    }
    if (ch.indexOf(" ")==-1) {
        return false
    }
    return true
}

function login() {
    let passowrd = document.getElementById("password").value;
    let email=document.getElementById("email").value;   
    if (checkmail(email)==false ) {
        document.getElementById("wrong-email").innerHTML="Wrong Mail";
        document.getElementById("wrong-email").style.background="rgba(255, 0, 0, 0.267)";
        return false;
    }
    if (checkpass(passowrd)==false) {
        document.getElementById("wrong-pass").innerHTML="Wrong Pass";
        document.getElementById("wrong-pass").style.background="rgba(255, 0, 0, 0.267)";
        return false;
    }
    else {
        return true
    }

}