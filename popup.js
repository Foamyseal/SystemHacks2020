//javascript code here

var d = new Date();
var day = d.getDate();

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('test');
    // onClick's logic below:
    link.addEventListener('click', function() {
        check(day);
    });
});
