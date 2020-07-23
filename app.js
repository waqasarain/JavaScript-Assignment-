   //    ALERT
   // Alert Question 1
// alert("This Page Was Blocked !!");

   // Alert Question 2
// alert("Welcome To This Page.");


   // Alert Question 3
// alert("Hello! This is simple Alert Box...! \nDo You Want to Continue? ");

   // Alert Question 4

// var x ="This is the Alert Message!";
// var y ="You are Blocked.";
// var z ="Sorry this popup Alert! \nOops! Something Went Wrong.";

// alert(x);
// alert(y);
// alert(z );

   // Alert Question 5
// alert("Hello! I can run JS my web browser's console");


// var a = ("The Valule of a is"); 
// var b = 2;
// console.log(a,b); 

// Alert Question 6 html & css project.
// Alert Question 7 html & css project.


// VARIABLES FOR STRINGS 

// Question 1

// var x = "Jhone Doe";
// alert(x);

//Question 2 

// var x = "Waqas";
// alert("Muhammad" +" "+ x);

//Question 3 

// var titledmessage
// titledmessage = "Hello World"
 
// alert(titledmessage)

// Question 4

// var name = "Muhammad Waqas."
// var age = "20 Year"
// var qualification = "Intermediate."
// var student = "Web and Mobile Hybird Application Development."

// alert("I am " + name)
// alert("I am " + age + " old.")
// alert("My Qualification " + qualification)
// alert("I am Student " + student)

// Question 5

// var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP"

// alert(pizza)

// Question 6

//var email = "xyz@example.com"

//alert("My email address is " + email)

// Question 7

//var book = "A smarter way to learn JavaScript"

//alert("I am trying to learn form the Book " + book)

// Question 8


//var text = "Yeh! I can write HTML content through JavaScript"

//document.write(text)

// Question 9

// var foo = "___________ஜ۩۞۩ஜ___________"

// alert(foo)


//VARIABLES FOR NUMBERS 

// Question 1

//var age = "20 Year"

//alert("I am " + age + " old" )


// Question 2 not understand

// Question 3

//var BirthYear = "2000"

//document.write("My Birthday Year is  " + BirthYear + "<br>")
//document.write("Data type of my declared variable in number")

// Question 4

// var name = prompt("Wellcome to Shopping.dot.com \nEnter your name.")
// var productTitle = prompt("Please Enter product name.")
// var quantity = prompt("How many products wants to order.")

// document.write(name + " ordered " + quantity+ " " + productTitle + " on" +" www.Shopping.dot.com.")


// Remaining Question not Attempt



// === String Method Task_1  21-25

// var a = prompt("Enter your First Name");
// var b = prompt(" Enter your Last Name");
// var c = a + b;

// document.write(c);


// === String Method Task_2

// var mobileName = prompt("Enter Your favorite mobile phone model");


// document.write("My favorite phone Name is: ",mobileName ,"<br>");
// document.write("Length of String: ",mobileName.length);


// === String Method Task_3

// var name = "pakistani";

// document.write("String : ",name ,"<br>");
// document.write("Index of 'n': ", name.indexOf("n"));

// === String Method Task_4

// var text = "Hello World";

// document.write("String : ",text ,"<br>");
// document.write("Last index 'l': ", text.lastIndexOf("l"));


// === String Method Task_5

// var name = "Pakistani";

// document.write("String : ",name ,"<br>");
// document.write("character at index 3: ", name.charAt(name.length - 6));


// === String Method Task_6

// var geek1 = "Muhammad Waqas";
// var geek2 =  "Maqbool";


// var new_geek = geek1.concat(geek2);

// document.write(new_geek);


// === String Method Task_7

// var city = "Hyderabad";


// document.write("City : ",city,"<br>");
// document.write("After Replacing : ", city.replace("Hyderabad","Islamabad"));


// === String Method Task_8

//  var message = ("Ali and Sami are best friends. They play cricket and football together.");

// document.write(message.replace("and", "&"));


// === String Method Task_9

// var string = "472";

// var number = parseInt(string);

// document.write("Value: " ,string +"<br>");
// document.write("Type: string" +"<br>");
// document.write("Value: " , number +"<br>");
// document.write("Type: number" );


// === String Method Task_10

// var userInput = prompt("Enter Any Thing");

// var input = userInput.toUpperCase();

// document.write(input);



// === String Method Task_11

// var userInput = prompt("Enter Any Thing");

// var userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
// document.write(userInput);


// === String Method Task_12


// var numberAsNumber = 32.36;
// var numberAsString = numberAsNumber.toString();
// document.write(numberAsString);

// === String Method Task_13,14,15  Did not UnderStand


// === String Method Task_16


// var university = ("University of Karachi");

// var arr = university.split("");

// document.write(arr);


// === String Method Task_17


// var userInput = prompt("Enter a character");

// var lastChar = userInput.charAt(userInput.length - 1);


// document.write("User input: " +  userInput + "<br>");
// document.write("Last Character of input: " +  lastChar);


// === String Method Task_18

// var text = ("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");

// count = 0;

// for(var i = 0 ; i < text.length ; i++){
//    if (text.charAt(i) === 'm'){
//       count++;
//    }
// }

// document.write("Text: " + text +"<br>" +"<br>");
// document.write("There are " + count + " occurrences of text");



// === Math Method Task_1


// var postiveInteger = prompt("Enter Postive Integer");

// var roundValue = Math.round(postiveInteger);
// var floorValue= Math.floor(postiveInteger);
// var ceilValue = Math.ceil(postiveInteger);

// document.write("Number " +  postiveInteger +"<br>");
// document.write("Round off Value: " + roundValue + "<br>" );
// document.write("Floor Value: " +  floorValue + "<br>");
// document.write("Ceil Value : " +  ceilValue + "<br>");


// === Math Method Task_2

// var negativeInteger = prompt("Enter Negative Integer");

// var roundValue = Math.round(negativeInteger);
// var floorValue= Math.floor(negativeInteger);
// var ceilValue = Math.ceil(negativeInteger);

// document.write("Number " +  negativeInteger +"<br>");
// document.write("Round off Value: " + roundValue + "<br>" );
// document.write("Floor Value: " +  floorValue + "<br>");
// document.write("Ceil Value : " +  ceilValue + "<br>");


// === Math Method Task_3

// var value = prompt("Enter the value");

// var absolute = Math.abs(value);

// document.write("The Absolute value of " + value + " is " + absolute);


// === Math Method Task_4

// var randomnumber1;
// var randomnumber2;
 
//    randomnumber1 = Math.ceil(Math.random()*6);
//    randomnumber2 = Math.ceil(Math.random()*6);

//  document.write("random dice value is: " + randomnumber1 + "<br>");

//  document.write("random dice value is: " + randomnumber2);


// ==Math Method  task 5 not UnderStand

// === Math Method Task_6


// var randomnumber;
   
// randomnumber = Math.ceil(Math.random()*100);

// document.write("random number between 1 to 100: " + randomnumber);


// ==Math Method  task 7 and 8  not UnderStand


// === Data Methods Task_1

// var current;
// current = new Date();
// document.write(current.toString());


// === Data Methods Task_2

// var getMonths = ["January","February","March","April","May","June","July","Auguest","September","October","November","December"];

// var today = new Date();

//document.write(getMonths[today.getMonth()]);



//=== Data Methods Task_3

//  var name =  prompt("Enter days Name");
//  if (name === "sunday") {
//  alert("Today is Sun");
// }
//  if (name == "satturday") {
//    alert("Today is Sat");
//  }
//  if (name == "monday") {
//    alert("Today is Mon");
//  }
//  if (name == "tuesday") {
//    alert("Today is Tue");
//  }
//  if (name == "wednesday") {
//    alert(" Today is Wed");
//  }
//  if (name == "thurday") {
//    alert("Today is Thu");
// }
// if (name == "friday") {
//    alert("Today is Fri");
//  }



//=== Data Methods Task_4

// var name = prompt("Enter Days Name");
// if (name === "saturday") {
// alert(name +" It's funday");
// }
// if (name == "sunday") {
//    alert(name +" It's Boring day");
// }
// if (name == "monday") {
//    alert(name +" It's Working day");
// }
// if (name == "tuesday") {
//    alert(name +" It's Normal day");
// }
// if (name == "wednesday") {
//    alert(name +" It's Normal day");
// }
// if (name == "thurday") {
//    alert(name +" It's Working day");
// }
// if (name == "friday") {
//    alert( name +" It's Eid day");
// }


//  Remaining Not Attempt 


// FUNCTION not Attempt 


// FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS 38-42

// ==question 1

// var a = prompt('Enter a value')
// var b = prompt('Enter b Value')
// var result = Math.pow(a,b)
// document.write("The value " , a + " raised to " + b + " " + "is " + result)



//==question 2
  
// function LeapYear() { 
// var year= document.getElementById("year").value; 
// document.getElementById("output").innerHTML 
// 	= (year % 100 === 0) ? (year % 400 === 0) 
// 	: (year % 4 === 0);
// }

//==question 3

// var a=12;
// 	var b=14;
// 	var c=13;
// 	var s =(a+b+c)/2; 
	
// 	var area = Math.sqrt(s*(s-a)*(s-b)*(s-c))


// 	document.write("a ",a ,' ' ," b " , b ,' ' ," c ", c , "<br>")
// 	document.write("Area" +" " + area)

// == Question 4  Not Attempt

// == Question 5
// var character =prompt("Please write this text \n'Find the character' ")
// 	document.write(character , "<br>")
// 	document.write("The h is number " ,character.indexOf("h")) 


//== question 6

// String.prototype.character = function() {
//   return this.replace(/[aeiou]+/g, ''); 
// }

// function submit() {
//   var input = document.getElementById('input').value;
//   document.getElementById('output').innerHTML = input.character();
// }

// question == 7
// 	function findOccurrences() {
//   var a = prompt("Pleases read this application and give me gratuity");
//   var res = a.match(/[aeiou]{2}/g);
//   return res ? res.length : 0;

// }

// var found = findOccurrences();

// document.write(found);


// question 8


// var input = document.getElementById('input');
// var result = document.getElementById('result');
// var inputType = document.getElementById('inputType');
// var resultType = document.getElementById('resultType');
// var inputTypeValue,resultTypeValue;

// // now add listener
// input.addEventListener("keyup",myResult);
// inputType.addEventListener("change",myResult);
// resultType.addEventListener("change",myResult);

// // taking initial value
// inputTypeValue = inputType.value;
// resultTypeValue = resultType.value;


// function myResult(){


// // when we change the input and output type vale we need to updata the 
// // inputTypeValue and resultTypeValue

// 	inputTypeValue = inputType.value;
// 	resultTypeValue = resultType.value;


// // now compare the input and resultType value and add formula

// 	if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){

// 		//this is meter to kilometer formula 
// 		result.value = Number(input.value) * 0.001;
// 	}else if(inputTypeValue === "meter" && resultTypeValue==="Centimeter"){

// 		//this is meter to Centimeter formula 
// 		result.value = Number(input.value) * 100;

// 	}else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
// 		//this is meter to meter formula 
// 		result.value = input.value
// 	}else if(inputTypeValue === "meter" && resultTypeValue==="feet"){
// 		result.value = Number(input.value)*3.281
// 	}else if(inputTypeValue === "meter" && resultTypeValue==="mile"){
// 		result.value = Number(input.value)/1609
// 	}else if (inputTypeValue ==="meter" && resultTypeValue==="inch") {
// 		result.value = Number(input.value)*39.37
// 	}



// 	if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){
// 		//this is kilometer to meter formula 
// 		result.value = Number(input.value) * 1000;
// 	}else if(inputTypeValue === "kilometer" && resultTypeValue==="Centimeter"){
// 		//this is kilometer to Centimeter formula 
// 		result.value = Number(input.value) * 100000;
// 	}else if(inputTypeValue === "kilometre" && resultTypeValue==="kilometer"){
// 		//this is kilometer to kilometer formula 
// 		result.value = input.value
// 	}else if (inputTypeValue === "kilometer" && resultTypeValue==="feet") {
// 		result.value = Number(input.value)*3281
// 	}else if (inputTypeValue === "kilometer" && resultTypeValue==="inch") {
// 		result.value = Number(inputTypeValue)*39370
// 	}else if (inputTypeValue === "kilometer" && resultTypeValue==="mile") {
// 		result.value = Number(inputTypeValue)/1.609

// 	}


// 	if(inputTypeValue === "Centimeter" && resultTypeValue==="kilometer"){
// 		//this is Centimeter to kilometer formula 
// 		result.value = Number(input.value)/100000;
// 	}else if(inputTypeValue === "Centimeter" && resultTypeValue==="meter"){
// 		//this is Centimeter to meter formula 
// 		result.value = Number(input.value)/100;
// 	}else if(inputTypeValue === "Centimeter" && resultTypeValue==="Centimeter"){
// 		//this is Centimeter to Centimeter formula 
// 		result.value = input.value
// 	}else if (inputTypeValue === "Centimeter" && resultTypeValue==="feet") {
// 		result.value = Number(input.value)/30.48
// 	}else if (inputTypeValue === "Centimeter" && resultTypeValue==="inch") {
// 		result.value = Number(inputTypeValue)/2.54
// 	}else if (inputTypeValue === "Centimeter" && resultTypeValue==="mile") {
// 		result.value = Number(inputTypeValue)/160934

// 	}


// if(inputTypeValue === "inch" && resultTypeValue==="meter"){
// 		//this is kilometer to meter formula 
// 		result.value = Number(input.value)/39.37;
// 	}else if(inputTypeValue === "inch" && resultTypeValue==="Centimeter"){
// 		//this is kilometer to Centimeter formula 
// 		result.value = Number(input.value)* 2.54;
// 	}else if(inputTypeValue === "inch" && resultTypeValue==="kilometer"){
// 		//this is kilometer to kilometer formula 
// 		result.value = Number(input.value)/39370
// 	}else if (inputTypeValue === "inch" && resultTypeValue==="feet") {
// 		result.value = Number(input.value)*12

// 	}else if (inputTypeValue === "inch" && resultTypeValue==="inch") {
// 		result.value = input.value
// 	}else if (inputTypeValue === "inch" && resultTypeValue==="mile") {
// 		result.value = Number(inputTypeValue)/63360}




// if(inputTypeValue === "feet" && resultTypeValue==="meter"){
// 		//this is kilometer to meter formula 
// 		result.value = Number(input.value)/3.281;
// 	}else if(inputTypeValue === "feet" && resultTypeValue==="Centimeter"){
// 		//this is kilometer to Centimeter formula 
// 		result.value = Number(input.value)* 30.48;
// 	}else if(inputTypeValue === "feet" && resultTypeValue==="kilometer"){
// 		//this is kilometer to kilometer formula 
// 		result.value = Number(input.value)/3281
// 	}else if (inputTypeValue === "feet" && resultTypeValue==="feet") {
// 		result.value = input.value

// 	}else if (inputTypeValue === "feet" && resultTypeValue==="inch") {
// 		result.value = Number(input.value)*12

// 	}else if (inputTypeValue === "feet" && resultTypeValue==="mile") {
// 		result.value = Number(inputTypeValue)/5280
// 	}



// 	if(inputTypeValue === "mile" && resultTypeValue==="meter"){
// 		//this is kilometer to meter formula 
// 		result.value = Number(input.value)*1609;
// 	}else if(inputTypeValue === "mile" && resultTypeValue==="Centimeter"){
// 		//this is kilometer to Centimeter formula 
// 		result.value = Number(input.value)*160934;
// 	}else if(inputTypeValue === "mile" && resultTypeValue==="kilometer"){
// 		//this is kilometer to kilometer formula 
// 		result.value = Number(input.value)*1.609
// 	}else if (inputTypeValue === "mile" && resultTypeValue==="feet") {
// 			result.value = Number(inputTypeValue)*5280

// 	}else if (inputTypeValue === "mile" && resultTypeValue==="inch") {
// 		result.value = Number(input.value)*63360

// 	}else if (inputTypeValue === "mile" && resultTypeValue==="mile") {		
// 		result.value = input.value
// 	}
// }	


// == question no 9 not attempt

// == question 10

// var amount =prompt("Please Enter your Amount!!!")
// var notes100= amount/100;
// var notes50= (amount % 100/50); 
// var notes10= (((amount % 100) % 50) / 10);
// var remaining= (((amount % 100) % 50) % 10);

// document.write("Requried notes of Rs 100 = " , notes100 ,  " " , "<br>")
// document.write("Requried notes of Rs 50 = " , notes50 ,  " " ,"<br>")
// document.write("Requried notes of Rs 10 = " , notes10 , " ","<br>")
// document.write("Amount remaining Rs. = " , remaining)


//  EVENTS 


// question 1

	// var get = document.getElementById("para"); 
			
	// 		get.innerHTML = 
	// 			"Click on the LINK for further confirmation."; 


// question 3`


// var index, table = document.getElementById('table');
//             for(var i = 1; i < table.rows.length; i++)
//             {
//                 table.rows[i].cells[3].onclick = function()
//                 {
//                     var c = confirm("do you want to delete this row");
//                     if(c === true)
//                     {
//                         index = this.parentElement.rowIndex;
//                         table.deleteRow(index);
//                     }
                    
//                 }
                
//             }



// question 4 


// function swapImage() {
//  var imageAfter = document.getElementById("img")
//  imageAfter.src = "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60";
//  }

//  function imageBefore(){
//  	var swapImage1 = document.getElementById("img")
//  	swapImage1.src = "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
//  }

// question 5

// var clicks = 0;
//     function increaseClick() {
//         clicks += 1;
//         document.getElementById("clicks").innerHTML = clicks;
//     };


//     function decreaseClick(){
//     	clicks -=1;
//     	document.getElementById("clicks").innerHTML = clicks;    
//     }



// Event 49 -52

// question1

   // function addRow()
   //          {
   //              // get input values
   //              var fname = document.getElementById('Email').value;
   //               var lname = document.getElementById('password').value;
   //                var age = document.getElementById('password-repeat').value;
                  
   //                // get the html table
   //                // 0 = the first table
   //                var table = document.getElementsByTagName('table')[0];
                  
   //                // add new empty row to the table
   //                // 0 = in the top 
   //                // table.rows.length = the end
   //                // table.rows.length/2+1 = the center
   //                var newRow = table.insertRow(table.rows.length/2+1);
                  
   //                // add cells to the row
   //                var cel1 = newRow.insertCell(0);
   //                var cel2 = newRow.insertCell(1);
   //                var cel3 = newRow.insertCell(2);
                  
   //                // add values to the cells
   //                cel1.innerHTML = fname;
   //                cel2.innerHTML = lname;
   //                cel3.innerHTML = age;
   //          }
            

// question 2


// function readMore(){
//    var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum."

//   var pera = document.getElementById('pera')
//   pera.innerHTML = text
// }



// Event 53-57

// question 2


   // function zoomin() { 
   //          var zoo = document.getElementById("text"); 
   //          var currHeight = zoo.clientHeight; 
   //              zoo.style.fontSize = (currHeight + 10) + "px"; 
   //      } 
   //      function zoomout() { 
   //          var zoo = document.getElementById("text"); 
   //          var currHeight = zoo.clientHeight; 
   //              zoo.style.fontSize = (currHeight - 10) + "px"; 
   //      } 


// DOM 58 -67


/ i. Get element of id “main-content” and assign them in a variable.

	
//var content = document.getElementById('main-content')

// ii. Display all child elements of “main-content” element.

//	var child = content.childNodes;
// console.log(child);

// iii. Get all elements of class “render” and show their innerHTML in browser.

// var main = content.childNodes[1].innerHTML = "Class='render'";
// var main = content.childNodes[2].innerHTML = "Class='render'";
// var main = content.childNodes[3].innerHTML = "Class='render'";
// var main = content.childNodes[4].innerHTML = "Class='render'";
// var main = content.childNodes[5].innerHTML = "Class='render'";
// var main = content.childNodes[6].innerHTML = "Class='render'";
// var main = content.childNodes[7].innerHTML = "Class='render'";
// var main = content.childNodes[8].innerHTML = "Class='render'";
// var main = content.childNodes[9].innerHTML = "Class='render'";

//iv. Fill input value whose element id first-name using javascript 

// var fillInput = document.getElementById("first-name");
// // fillInput.setAttribute("type", "text");
// var first = fillInput.setAttribute("value", "Muhammad Waqas");
// first.appendChild(fillInput);

// v. Repeat part iv for id ”last-name” and “email”.


//Repeat part iv for id ”last-name” and “email”.

// var fillInput = document.getElementById("last-name");
// // fillInput.setAttribute("type", "text");
// var last= fillInput.setAttribute("value", "Muhammad Maqbool");
// last.appendChild(fillInput);

// var fillInput = document.getElementById("email");
//  //fillInput.setAttribute("type", "text");
// var email = fillInput.setAttribute("value", "waqasmaqbool50@gmail.com");
//  email.appendChild(email);




//2. What is node type of element having id “form-content”

//i. What is node type of element having id “form-content”
//var type = document.getElementById("form-content").nodeType;
//document.write("nodeType "," ", type)

//Show node type of element having id “lastName” and its child node.

// var lastname = document.getElementById("lastname");
// var child = lastname.childNodes;
// var type = child.nodeType 
// document.write(type , "<br>")


// iii. Update child node of element having id “lastName”.

// var update = document.getElementById(lastName)
// document.write(update.childNodes)




//Get First and last child of id “main-content”.

// var main_content = document.getElementById('main-content');

// console.log(main_content.firstChild)
// console.log(main_content.lastChild)


 // var main_content = document.getElementById('lastName');

 // console.log(main_content.nextSibling)
 // console.log(main_content.previousSibling)


// var emailParent = document.getElementById(email)
// var parentNode = emailParent.parentNode
// console.log(parentNode)

// var emailNode = document.getElementById("email");
// var parentNode = emailNode.parentNode;
// console.log(parentNode.nodeType)
// console.log(parentNode.nodeType)
