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

        //do stuff


        var popup = window.open("http://www.google.com/");

        


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
