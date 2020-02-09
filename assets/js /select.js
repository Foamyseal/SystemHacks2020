function getValue() {
    window.x = document.getElementById("school").value;
}

function redirect(){
    if (window.x == "tsu"){
        window.open("../HTML/login/tuna.html", "_self")
    }
    else if (window.x == "uoc"){
        window.open("../HTML/login/chubb.html", "_self") ;
    }
    else{
        window.open("../HTML/login/eggsalad.html", "_self"); 
    }
}