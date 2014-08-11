// So, lack of jQuery means that we need to probably use window onload - 
// everything is at the end of our script, so that should emulate
// on ready as best as we can.

window.onload = function () {
//    document.getElementById("wrapper").innerHTML = menuItems;
    createList(menuItems);
}

// so what we basically need to do is build this UL first.
// We want to create the UL, and then add all of the <li> items to it.
// It's bad form to do it in the global document, but we want to save time
// and then polish later.

function createList(menuItems) {
    var theList = document.createElement("ul");
    var theListIs = document.createTextNode("this is a list!");
    
    // so now we have a list, and under this we are going to insert it.
    // Now we need to iterate over each menu item, and enter a little bit
    // of callback hell in order to add each individual item to it.
    
    // Now, we CAN use recursion for this. However, instead we are going to have
    // two functions (because callback hell). One will handle
    // sublists, the other will handle the main list.
    var i = 0;
    addMenuItems(theList, menuItems, "", i, false);
    
    theList.appendChild(theListIs); // testing porpoises.
    document.getElementById("wrapper").appendChild(theList);
}

function addMenuItems(theList, menuItems, parentNode, i, isSub) {
//    alert(isSub);
    //    alert('potato');
    // menuItems is a JS/JSON object (technically JS as of writing this).
    // We need to read through and access its properties, adn add
    // each as an item.
    //Since it is dynamic, we are going to have to use a for-in.
    for(var prop in menuItems) {
        // so, the nice thing is that if I wrote this myself, they'd always 
        // have a sub property only if they have a submenu. So first thing we
        // want to do is check to see if it has sub items
        
        // so, prop is going to equal the top level name of the nav! this is good.
        // We can use this in order to populate the top level of our list, 
        // and then check to see if it has a sub item.
        var theItem = document.createElement("li");
        var theItemName = prop;
        var theItemObj = menuItems[prop];
        
        if(typeof theItemObj === 'object'){
            
            var theLink = theItemObj["link"];
            
            // so test if it has the sub property first
            var subList = theItemObj["sub"];
            var hasSubl = theItemObj.hasOwnProperty("sub");
            
            // test if it's a subitem
            if(isSub) {
                alert(theItemName + ' qq');
                // we're in a subitem!
                
                if(theItemName === 'sub') {
                    alert("rawr");
                    
                    // It's a subitem, so we want to make a link for the parent item,
                    // and put that + the UL of the subitems into a list
                    var subList = document.createElement("ul");
                    var a = document.createElement("a");
                    // So we also want the parent node item...
                    var linkText = document.createTextNode(parentNode);
                    a.appendChild(linkText);
                    a.href = menuItems[prop];
                    // somehow for this we need to access the parent node
                    a.title = menuItems[0];

                    // then create a li item with link
                    var listItem = document.createElement("li");
                    listItem.appendChild(a);
                    theList.appendChild(listItem);
                    
                    // now we want to append its children...
                    addMenuItems(subList, theItemObj, theItemName, i, true);
                }
            } else {
                // we aren't in a subitem
                
                if(hasSubl) {
                    
                    // It's a subitem, so we want to make a link for the parent item,
                    // and put that + the UL of the subitems into a list
                    var subList = document.createElement("ul");
                    var a = document.createElement("a");
                    // So we also want the parent node item...
                    var linkText = document.createTextNode(parentNode);
                    a.appendChild(linkText);
                    a.href = menuItems[prop];
                    // somehow for this we need to access the parent node
                    a.title = menuItems[0];

                    // then create a li item with link
                    var listItem = document.createElement("li");
                    listItem.appendChild(a);
                    theList.appendChild(listItem);
                    
                // if it has a sublist, then we need to handle that differently.
//                alert('theItemName ' + theItemName);
                    addMenuItems(subList, theItemObj, theItemName, i+1, true);
                
                } else {
                    // test if it's undefined or not
                    if(theLink) {
    //                    alert('theLink ' + theLink);
                        var a = document.createElement("a");
                        // So we also want the parent node item...
                        var linkText = document.createTextNode(parentNode);
                        a.appendChild(linkText);
                        a.href = menuItems[prop];
                        // somehow for this we need to access the parent node
                        a.title = menuItems[0];

                        // then create a li item with link
                        var listItem = document.createElement("li");
                        listItem.appendChild(a);
                        theList.appendChild(listItem);
                    }
                addMenuItems(theList, theItemObj, theItemName, i, false);
                }
            }
            
            
        }
    }
}
