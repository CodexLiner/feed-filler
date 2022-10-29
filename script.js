
var init = function(queue) {

    console.log("injector in")
    const planets = document.getElementsByClassName("mat-focus-indicator mat-menu-trigger gmat-button mat-button mat-stroked-button mat-button-base")[0].click()
    const dropList = document.getElementsByClassName("mat-menu-content ng-tns-c117-3")[0].children;
    var addButton = document.getElementsByClassName("mat-focus-indicator gmat-button mat-button mat-button-base mat-primary ng-star-inserted")[0];
    dropList[0].click()

    class Queue {
        constructor() {
          this.elements = {};
          this.head = 0;
          this.tail = 0;
        }
        enqueue(element) {
          this.elements[this.tail] = element;
          this.tail++;
        }
        dequeue() {
          const item = this.elements[this.head];
          delete this.elements[this.head];
          this.head++;
          return item;
        }
        peek() {
          return this.elements[this.head];
        }
        get length() {
          return this.tail - this.head;
        }
        get isEmpty() {
          return this.length === 0;
        }
    }
    chrome.storage.local.get(['feed'], function(result) {
        console.log('Value currently is ' + result.feed);
    });


    
    // let queue = new Queue();
    // queue.enqueue("Google");
    // queue.enqueue("https://newskoo.com");
    // queue.enqueue(3);
    // queue.enqueue(62);
    // queue.enqueue(24);
    // queue.enqueue(23);  

    console.log("Within init");
    $('input, textarea').each(function(index) {
        var input = $(this);
        if (input.parent().hasClass("chosen-search")) {
            return;
        }
        var decidingfactor = ""
        if (input.attr('id') != undefined) {
            decidingfactor = input.attr('id');
        } else {
            if (input.attr('name') != undefined) {
                decidingfactor = input.attr('name');
            } else {
                decidingfactor = input.attr('class');
            }
        }
        if (input.attr('type') != "radio" && input.attr('type') != "checkbox" && input.attr('type') != "file") {
            if (input.val() != "") {
                return;
            }
        }
        autoFillValues(input, queue);
        try {
           const add =  document.getElementsByClassName("mat-focus-indicator gmat-button mat-button mat-button-base mat-primary mat-button-disabled ng-star-inserted")[0];
           const btn = document.getElementsByTagName('button');
           btn[btn.length-1].click();

        } catch (error) {
            console.log("errrrr"+ error)
        }

    })

}



function autoFillValues(input, queue) {
    input.focus()
    document.execCommand('insertText', false, queue.dequeue());
    addButton = document.getElementsByClassName("mat-focus-indicator gmat-button mat-button mat-button-base mat-primary ng-star-inserted")[0];
    

}


// Context Menu
var rightclicked_item = null;
console.log(rightclicked_item);
$("input").bind("contextmenu", function(e) {
    rightclicked_item = e;
    console.log(rightclicked_item);
}).click(function() {
    rightclicked_item = null;
    console.log(rightclicked_item);
});


if (right_clicked == true) {
    console.log(right_clicked, right_clicked);
} else { 
    class Queue {
        constructor() {
          this.elements = {};
          this.head = 0;
          this.tail = 0;
        }
        enqueue(element) {
          this.elements[this.tail] = element;
          this.tail++;
        }
        dequeue() {
          const item = this.elements[this.head];
          delete this.elements[this.head];
          this.head++;
          return item;
        }
        peek() {
          return this.elements[this.head];
        }
        get length() {
          return this.tail - this.head;
        }
        get isEmpty() {
          return this.length === 0;
        }
    }
    let queue = new Queue();
    console.log(right_clicked) 
    chrome.storage.local.get(['feed'], function(result) {
       var feedArray = result.feed.split("|");
       for (let index = 0; index < feedArray.length; index++) {
          queue.enqueue(feedArray[index])
       }

       var i = 0;                   
       function myLoop() {         
         setTimeout(function() {    
           console.log('hello '+i );   
           i++;                     
           if (i < 7) {  
               init(queue);         
               myLoop();             
           }                       
         }, 2000)
       }
       
       myLoop();    
      
    });         
   
}

// function injectScript(file_path, tag) {
//     var node = document.body;
//     var script = document.createElement('script');
//     script.setAttribute('type', 'text/javascript');
//     script.setAttribute('src', file_path);
//     node.appendChild(script);
// }
// injectScript(chrome.extension.getURL('windowObj.js'), 'body');