//javascript code here

var d = new Date();
var day = d.getDate();

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('dropbtn');
    // onClick's logic below:
    btn.addEventListener('click', function() {
        document.getElementById("myDropdown").classList.toggle("show");
    });
});
