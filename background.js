//background JS

//chrome.tabs.onCreated.addListener(function callback);

var d = new Date();
var day = 17;

var r = chrome.storage.local.get(/* String or Array */["renewed"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
    r = items.renewed;

});

function check(day_today)  {

  if(day_today >= 16 && r == false){
    alert("yeet");

    chrome.storage.local.set({ "renewed": true }, function(){
        //  Data's been saved boys and girls, go on home
    });

  }else if(day_today < 16){
    alert("yote");

    chrome.storage.local.set({ "renewed": false }, function(){
        //  Data's been saved boys and girls, go on home
    });

  }
}

chrome.storage.local.set({ "renewed": false }, function(){
    //  Data's been saved boys and girls, go on home
});
