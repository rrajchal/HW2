function display2_1() {
	var saiyan = {name: 'Son Goku', age: 40};
	console.log(saiyan.dragonball);
	console.log(null==undefined);
	console.log(null===undefined);
  var myanswer  = "My answer goes here: The first log would output undefined. \
  The second log would output true and the third log.console would output false. \
  The second console log would output true because in JavaScript, == will compare for equality after doing any necessary type conversions \
  However, === in the third console.log will return if the two values are same (by variable type and value). \
  Therefore, (null == undefined) is true while(null === undefined) is false" // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
}
function display2_2() {
  var myanswer  = "My answer goes here: When we use \"use strict\", variable must be defined as var x = 3.14, \
  Otherwise, we get an error \"Uncaught ReferenceError\" which basically means x is not defined. \
  Strict mode makes the easier and secure by eliminating confusions and disallowing global variables" // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "In getChildrenTags() function, the children property returns a collection of an element's child elements, \
                   as an HTMLCollection object. Here we are going to access the div_1134 id and get it's children as a collection. \
				   We can access the collection as a list by index number. The index starts at 0."; 
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName("div"); // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change 
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName("naruto"); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById("div_1134").children;
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}

