//background JS

//on new tab open run check

chrome.storage.local.set({ "renewed": false }, function(){
    //  Data's been saved boys and girls, go on home
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });

  //initialize renewed to false on extension installation
  chrome.storage.local.set({ "renewed": false }, function(){
  });
});

chrome.tabs.onCreated.addListener(function() {

  var d = new Date();
  var day = d.getDate();

  check(day);

});

function check(day_today)  {

  chrome.storage.local.get(["renewed"], function(items){
      var r_info = items.renewed;

      if(day_today >= 16 && r_info == false){
        alert("yeet");

        var schoolURL = "./HTML/school.html"

        //do stuff

        var popup = window.open(schoolURL);

        popup.document.addEventListener('load', selectSchool(popup), false );

        enterLogin();

        clickBox();


        chrome.storage.local.set({ "renewed": true }, function(){
        });

      }else if(day_today < 16 && r_info == true){
        alert("yote");

        //do stuff

        chrome.storage.local.set({ "renewed": false }, function(){
        });

      }
  });
}


function selectSchool(page){
  var userSchool = "uoc";

  alert(userSchool);

  page.document.getElementById('school').value = userSchool;
  page.document.getElementById('submitButton').click();


}

function enterLogin(){
  var id = "nickchubb";
  var password = "insertpasswordhere";

  //setInterval(function(){  }, 3000);
  document.getElementById('login').value = id;
  document.getElementById('password').value = password;
  document.getElementById('submitLogin').click();
}

function clickBox(){
  document.getElementById('requestcheckbox').value = true;
}
