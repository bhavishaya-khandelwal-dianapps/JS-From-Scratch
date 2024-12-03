//? Window :- 
//* 1. Window is the main container, or we can say the GLOBAL OBJECT and any operations related to entire browser window can be a part of window object. 

//* 2. All the members like objects, methods or properties. If they are the part of window object, them we do not refer the window object. 

//* 3. Window has methods, properties and object. Example :- setTimeout() or setInterval() are the methods, where as Document is the object of the Window and it also has a screen object with properties describing the physical display. 



//? Document :- 
//* 1. Whereas the DOM is the child of the window object. 

//* 2. Where in the DOM we need to refer the doceument, if we want to use the document object, methods or properties.

//* 3. Document is just the OBJECT of the GLOBAL OBJECT that is Window, which deals with the document, the HTML elements themselves. 



//? Window Object :- 
//* The window object represents the global window in a browser. Both the Browser Object Model (BOM) and the Document Object Model (DOM) are part of the window oject. 


//? Browser Object Model (BOM) :- 
//* The BOM represents the browser as an object and provides methods and properties for interacting with the browser itself (not directly related to the content of a web page) 

//* Examples of BOM features include window.navigator for browser information, window.location for URL manipulation, and window.alert for displaying alerts. 



//? Document Object Model (DOM) :- 
//* The DOM represents the structured document as a tree of objects, where each object corresponds to a part of the document (such as elements, attributes, and text). 

//* The DOM is primarily concerned with the content of the web page and allows JS to interact with and manipulate the HTML elements.

//? So, while the DOM is focused on the content of the page, the BOM is focused on the browser environment. The window object serves as the global object that encompasses both the BOM and the DOM when working in a browser environment. 



//? The DOM is a tree-like representation of the HTML document. It provide a way to interact with the HTML document using JavaScript. The DOM provides multiple properties and methods to dynamically change the content of the HTML document using JavaScript. 



//? DOM Properties :- 
//* document 
//* getElementById(id)
//* getElementByClassName(className)
//* getElementByTagName(tagName)
//* querySelector(selector)
//* querySelectorAll(selector)
//* innerHTML 
//* textContent
//* style  


//? DOM Methods :- 
//* createElement(tagName)
//* appendChild(node)
//* removeChild(node)
//* addEventListener(event, function)
//* removeEvenetListener(event, function)
//* setAttribute(name, value)
//* getAttribute(name)
//* parentNode / parentElement 
//* childNodes / children
//* firstChild / firstElementChild
//* lastChild / lastElementChild 
//* nextSibling / nextElement 
//* previousSibling / previousElement 
//* closest(selector)
//* forEach (Array.from)


//? DOM ek zaria hai jiski madad se JavaScript HTML ke content ko change krr paataa hai...!!






//* =========================================
//* BOM Properties:
//* =========================================

// ?window properties

//? window.console:
// Represents the browser's debugging console.
// Allows logging messages using methods like log(), warn(), and error().

//? window.innerWidth / window.innerHeight:
// Provides the width and height of the browser's content area (excluding toolbars and scrollbars).

//? window.scrollX / window.scrollY:
// Represents the number of pixels that the document is currently scrolled horizontally and vertically.

//? window.outerWidth / window.outerHeight:
// Provides the width and height of the whole browser window (including toolbars and borders).

//? window.localStorage:
// Provides a way to store key-value pairs persistently on the user's device.
// Allows storing data beyond the lifetime of a single page session.

//* Functions alert/confirm/prompt are also a part of BOM:
// They are directly not related to the document, but represent pure browser methods of communicating with the user.

//? window Object:
//? Represents the global window containing the BOM.
// Example: window.location, window.innerWidth, window.innerHeight.

//? navigator Object:
// Provides information about the browser.
// Example: navigator.userAgent, navigator.language.

//? location Object:
// Represents the current URL of the browser.
// Example: window.location.href, window.location.hostname.

//? history Object:
// Represents the session history, allowing navigation through the browser history.
// Example: window.history.back(), window.history.forward().

//? screen Object:
// Represents information about the user's screen.
// Example: window.screen.width, window.screen.height

//? window.localStorage, window.sessionStorage
// Objects for storing data persistently or for the duration of a page session.

//? document Object:
// Represents the DOM of the currently displayed document.

//* navigator Object:
//? The JavaScript navigator object is used for browser detection. It can be used to get browser information such as appName, appCodeName, userAgent etc.

//? navigator.userAgent (Property):
// Returns the user agent string of the browser.
// Example: console.log(navigator.userAgent).

//? navigator.language (Property):
// Returns the language preference of the user's browser.
// Example: console.log(navigator.language).

//? navigator.cookieEnabled (Property):
// Indicates whether cookies are enabled in the browser.
// Example: console.log(navigator.cookieEnabled).

//? navigator.platform (Property):
// Returns the platform on which the browser is running.
// Example: console.log(navigator.platform).

//? navigator.onLine (Property):
// Indicates whether the browser is online.
// Example: console.log(navigator.onLine).

//* 2: History object

// The JavaScript history object represents an array of URLs visited by the user. By using this object, you can load previous, forward or any particular page.

//* 3: location Object:

//? window.location.href (Property):
// Returns or sets the complete URL of the current page.
// Example: console.log(window.location.href).

//? window.location.hostname (Property):
// Returns the domain name of the web host.
// Example: console.log(window.location.hostname).

//? window.location.assign(url) (Method):
// Navigates to the specified URL.
// Example: window.location.assign("https://www.example.com").

//? window.location.reload(forceReload) (Method):
// Reloads the current page.
// Example: window.location.reload(true).

//? window.location.search (Property):
// Returns the query string part of the URL.
// Example: console.log(window.location.search)
// o/p = "?name=John&age=25"

//* 4: screen Object:
//? window.screen.width and window.screen.height (Properties):
// Represent the width and height of the user's screen.
// Example: console.log(window.screen.width).

//? window.screen.availWidth and window.screen.availHeight (Properties):
// Represent the available width and height of the user's screen (excluding taskbars).
// Example: console.log(window.screen.availWidth).

//? window.screen.colorDepth (Property):
// Returns the number of bits used to represent the color of each pixel.
// Example: console.log(window.screen.colorDepth).

//? window.screen.orientation (Property):
// Returns the current orientation of the user's screen.
// Example: console.log(window.screen.orientation).

//? window.screen.pixelDepth (Property):
// Returns the number of bits used to represent each pixel.
// Example: console.log(window.screen.pixelDepth).









//* ==============================
//* DOM IN JAVASCRIPT
//* ==============================

//? When a web browser loads an HTML document, it parses the HTML source code and creates a tree-like structure known as the Document Object Model (DOM). This DOM tree represents the structure of the HTML document, with each HTML element being a node in the tree.

//? This entire DOM tree is then accessible to JavaScript as an object. JavaScript can interact with this object to manipulate the content, structure, and style of the document dynamically. The DOM essentially serves as an interface between the HTML document and JavaScript, providing a way for scripts to access and modify the document's structure and content.

//todo The Document Object Model (DOM) is an Application Programming Interface (API). The DOM Tree is the structure of your HTML document, as represented by the DOM API. As stated, this API then gives us many methods and properties that we can use to manipulate the Tree, and therefore, by extension, the document.

//* Here is a types of nodes in js:

//? Element node:  An HTML tag, the tree building blocks.

//? Text node:  In the DOM tree, text content, including new lines, spaces, and tabs, is treated as text nodes.

//? Attribute node: An attribute of an element.

//? Comment node: Represent comments within the HTML document.

//? Processing instruction node:  A processing instruction node, such as <? xml-stylesheet … ?>.

//? Document node:  A document node.

//? Document type node: A document type node, such as <! DOCTYPE html>.

//* ==============================
//* DOM Properties and Methods
//* ==============================
//! DOM Properties:
// document
// getElementById(id)
// getElementsByClassName(className)
// getElementsByTagName(tagName)
// querySelector(selector)
// querySelectorAll(selector)
// innerHTML
// textContent
// style

//! DOM Methods:
// createElement(tagName)
// appendChild(node)
// removeChild(node)
// addEventListener(event, function)
// removeEventListener(event, function)
// setAttribute(name, value)
// getAttribute(name)
// parentNode / parentElement
// childNodes / children
// firstChild / firstElementChild
// lastChild / lastElementChild
// nextSibling / nextElementSibling
// previousSibling / previousElementSibling
// closest(selector)
// forEach (Array.from)

//* ==============================
//* DOM Navigation
//* ==============================

//? document represents the entire document
// console.log(document);

//? Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).

//? parentNode / parentElement:
// Navigate to the parent node or element.

// Document and DocumentFragment nodes can never have a parent, so parentNode will always return null. It also returns null if the node has just been created and is not yet attached to the tree.

//? childNodes / children:
// Navigate to child nodes or elements.

// childNodes is a property that returns a NodeList containing all child nodes of a given element, including text nodes and comment nodes.

//? firstChild / firstElementChild:
// Navigate to the first child node or element.

//todo The Element suffix in firstElementChild and similar properties signifies that only element nodes are considered.

//? lastChild / lastElementChild:
// Navigate to the last child node or element.

//? nextSibling / nextElementSibling:
// Navigate to the next sibling node or element.

//? previousSibling / previousElementSibling:
// Navigate to the previous sibling node or element.

//? closest(selector):
// Find the closest ancestor of the current element that matches a given selector.

//* ==============================
//* DOM Filtering
//* ==============================

//? childNodes / children:
// Get a NodeList or HTMLCollection and filter based on your criteria.

//? Filtering Siblings:
//? nextSibling / nextElementSibling
//? previousSibling / previousElementSibling

//? closest(selector):
//? Find the closest ancestor that matches a given selector.
//? The closest(selector) method is used to find the closest ancestor of an element that matches a specified CSS selector. This method traverses up the DOM tree, starting from the current element, and returns the first ancestor that matches the provided selector. If no matching ancestor is found, it returns null.

//* ==============================
//* DOM Searching
//* ==============================
//? getElementById(id): Find an element by its ID.

//? getElementsByClassName(className): Find elements with a specific class name.

//? getElementsByTagName(tagName): Find elements with a specific tag name.

//? querySelector(selector): Find the first element that matches the specified CSS selector.

//? querySelectorAll(selector): Find all elements that match the specified CSS selector.

//* ============================================
//* DOM - CRUD (Create, Read, Update, Delete):
//* ============================================

//? createElement(tagName): Create a new HTML element.

//? appendChild(node): Append a node as the last child of a parent node.

//? removeChild(node): Remove a child node from its parent.

//? addEventListener(event, function): Create an event listener to handle events.

//? removeEventListener(event, function): Remove an event listener.

//? setAttribute(name, value): Set the value of an attribute on an element.

//? getAttribute(name): Get the value of a specific attribute on an element.

//? innerHTML: Read or update the HTML content of an element.

//? textContent: Read or update the text content of an element.

//* =============================
//* DOM - Iteration
//* =============================

//? Iteration:
//? forEach (Array.from): Iterate through NodeList or convert to an array for more flexible manipulation.

// Very important
//* When you use the browser's developer tools console to select an element and change its text content using JavaScript, you are directly manipulating the DOM object in memory. Since the DOM is a live representation of the document, any changes you make to the DOM objects are immediately reflected in the rendered web page.

//* However, these changes are typically temporary and exist only in the current session. When you refresh the page or navigate away, the browser reloads the original HTML document from the server, and the DOM is reconstructed during the parsing process. Any modifications made to the DOM objects during the previous session are lost, and the page reverts to its original state.


let parent = document;
let bodyElement = document.body;
let headElement = document.head;

let bodyChild = bodyElement.childNodes;  //? NodeList
console.log(bodyChild);

let bodyChild_2 = bodyElement.children;  //? HTML Collections 
console.log(bodyChild_2);

let firstChild = bodyElement.firstChild;
console.log(firstChild);  //? button 

let firstElementChild = bodyElement.firstElementChild;
console.log(firstElementChild);  //? text 


let lastElem = bodyElement.lastChild;
console.log(lastElem);  //? script 

let lastElemChild = bodyElement.lastElementChild;
console.log(lastElemChild);  //? script 



let findElemenetById = document.getElementById("heading");
console.log(findElemenetById.innerText);
console.log(findElemenetById.innerHTML);
console.log(findElemenetById.textContent);


let findElemenetByClassName = document.getElementsByClassName("list-of--nodes");
console.log(...findElemenetByClassName);


for(let elem of findElemenetByClassName) {
    console.log(elem.innerText);
}


console.log(findElemenetByClassName.innerHTML);  //? undefined 


const findEle = document.querySelectorAll("li");
console.log(findEle);
for(let value of findEle) {
    console.log(value.innerText);
}
findEle.forEach((currEle) => {
    console.log(currEle.innerText);
})



