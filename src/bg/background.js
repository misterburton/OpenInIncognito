document.addEventListener('DOMContentLoaded', function() {

  chrome.browserAction.onClicked.addListener(function(tab) {
    
    chrome.windows.create({"url": tab.url, "incognito": true});

  });

});