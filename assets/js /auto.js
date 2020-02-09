function requestPass(){
  var userSchool = "uoc";

  document.getElementById('school').value = userSchool;
  document.getElementById('submitButton').click();

  //this is when page transition happens


  var id = "nickchubb";
  var password = "insertpasswordhere";

  document.addEventListener("load", ready);

  document.getElementById('login').value = id;
  document.getElementById('password').value = password;
  document.getElementById('submitLogin').click();


  //document.getElementById("myFrame").addEventListener("load", myFunction);


  //this is when page transition happens again




}
