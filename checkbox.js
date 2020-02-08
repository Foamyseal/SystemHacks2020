function proccessed() {
    var checkBox = document.getElementById("requestcheckbox");
    var text = document.getElementById("requested");
   

    if(checkBox.checked == true) {
        text.style.display = "block";
        checkBox.style.display = "none";
    }   else {
            text.style.display = "none";
        }

        
}
