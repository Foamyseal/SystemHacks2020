function requestPass(){
  var userSchool = "Simon Fraser University";
  var id = "nickchubb";
  var password = "insertpasswordhere";
  //var renewed = nick got it

  var xmlHttp = new XMLHttpRequest();
  var schoolUrl = "insert url here";
  var loginUrl = "insert url here";
  var renewUrl = "insert url here";

  xmlHttp.open( "GET", schoolUrl, false ); // false for synchronous request
  xmlHttp.send( null );

  document.getElementById('dropdown').value = userSchool;
  //press button
  //goto next http

  document.getElementById('usernameField').value = id;
  document.getElementById('passwordField').value = password;

  //check if login is correct
  //if fail, ask for new username password

  //press continue button
  //goto next http

  document.getElementById('checkBox').value = true;

  //wait until request finish
  //close connection (if needed?)

}
