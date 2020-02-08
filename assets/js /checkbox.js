    
var checkBox = document.getElementById("requestcheckbox");
var text = document.getElementById("requested");

function proccessed() {
    if(checkBox.checked == true) {
        text.style.display = "block";
        checkBox.style.display = "none"; 
        resetTime(); 
    }   else {
        text.style.display = "none";
    }
}

function resetTime() {
    setTimeout(resetCheckbox, 3000)
}

function resetCheckbox() {

    text.style.display = "none"
    checkBox.checked = false;
    checkBox.style.display = "";
}