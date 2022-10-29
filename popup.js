document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.getElementById('feeds');
    chrome.storage.local.get(['feed'], function(result) {
        if(result.feed){
            textArea.value = result.feed;
        }
    });
    
    const fillButtton = document.getElementById('fillButton');
    fillButtton.addEventListener('click' , ()=>{
       
        chrome.storage.local.set({"feed": textArea.value}, function() {
            
            chrome.tabs.getSelected(null, function(tab) {
                if (tab && tab.status == "complete") {
                    chrome.tabs.executeScript(tab.id, { file: "jquery.js" }, function() {
                        chrome.tabs.executeScript(tab.id, { code: "var right_clicked = false;" }, function() {
                            chrome.tabs.executeScript(tab.id, { file: "script.js" });
                            window.close();
                        });
                    });
                }
            })
        

        });
    })
    document.getElementById('clearButton').addEventListener("click" , ()=>{
        textArea.value = ''
        chrome.storage.local.set({"feed": ''}, function() { });
    })

    chrome.browserAction.onClicked.addListener(function(tab) {
        console.log("tab is in popup");

        if (tab && tab.status == "complete") {
            chrome.tabs.executeScript(tab.id, { file: "jquery.js" }, function() {
                chrome.tabs.executeScript(tab.id, { code: "var right_clicked = false;" }, function() {
                    chrome.tabs.executeScript(tab.id, { file: "script.js" });
                });
            });
        }


    })

}, false);