function selectSchool(){
    var userSchool = "Simon Fraser University";
    document.getElementById('dropdown').value = userSchool; //insert specific school here and specific dropdown option

    //continue button
    //wait until next page
}

function loginText(){
  var id = "nickchubb";
  var password = "insertpasswordhere";
  document.getElementById('usernameField').value = id;
  document.getElementById('passwordField').value = password;

  //check if login is correct
  //if fail, ask for new username password

  //continue button
  //wait until next page
}

function checkBox(){
  var currentDay = new Date();
  var day = currentDay.getDate();
  var renewed = false; //keep this in one function so that we don't have to run through all the checks
  //par example, return if renewed = true

  if(day >= 16 && !renewed){
    document.getElementById('checkBox').value = true;
    renewed = true;
  }
  else if(day < 16){
    renewed = false; //put this when we open a new tab
  }

  //wait until request finish
  //close connection (if needed?)

}
