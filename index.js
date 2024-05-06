//*********************chapter 26-30 **********************

// 1. Write a program that takes a positive integer from user & 
// display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number  

// var userInput = +prompt("Enter the number")
// var userInput1 = Math.round(userInput)
// var userInput2 = Math.floor(userInput)
// var userInput4 = Math.ceil(userInput)
// document.write("Number : " + userInput + "<br>"  )
// document.write(" round off value : " + userInput1 + "<br>")
// document.write("floor value : " + userInput2 + "<br>")
// document.write("ceil value : " + userInput4 )

// 2. Write a program that takes a negative floating point 
// number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 

// var userInput = +prompt("Enter the number in negative")
// var userInput1 = Math.round(userInput)
// var userInput2 = Math.floor(userInput)
// var userInput4 = Math.ceil(userInput)
// document.write("Number : " + userInput + "<br>"  )
// document.write(" round off value : " + userInput1 + "<br>")
// document.write("floor value : " + userInput2 + "<br>")
// document.write("ceil value : " + userInput4 )

// 3. Write a program that displays the absolute value of a 
// number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var userInput = +prompt("Enter the number")
// var userInput2 = Math.abs(userInput)
// document.write( "The absolute value of " +userInput + " is "+ userInput2)

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.: 

// var math ;
// var randomNumber = Math.random(math)*6
// var number = Math.ceil(randomNumber) 
// var number1 = Math.max(number)
// document.write("random dice value: " + number1)

// 5. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your 
// browser

// var math ;
// var randomNumber = Math.random(math)*2
// var number = Math.ceil(randomNumber) 
// var number1 = Math.max(number)

// if (number1 === 2) {
//     document.write( number1 + "<br>")
//     document.write("random coin value: Heads")
// } else {
//     document.write( number1 + "<br>")
//     document.write("random coin value: Tails")
// }

// 6. Write a program that shows a random number between 1 
// and 100 in your browser. 

// var math ;
// var randomNumber = Math.random(math)*99
// var number = Math.ceil(randomNumber) 
// var number1 = Math.max(number)
// document.write("random number between 1 and 100:" + number1)

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms 

// var userWeight = +prompt("Enter your weight in kilograms")
// var useroutput = userWeight.toFixed(1)
// document.write("The weight of user is " + useroutput + " Kilograms")

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user. 

// var math = +prompt("Enter a number between 1 and 10") ;
// var randomNumber = Math.random(math)*9
// var number = Math.ceil(randomNumber) 
// var number1 = Math.max(number)
// if (number1 === math) {
// alert("congratulates" )    
// } else {
// alert("Try again" + number1)    
// }


//*********************chapter 31-34 **********************

// 1. Write a program that displays current date and time in 
// your browser. 

// var date = new Date ()
// document.write(date)

// 2. Write a program that alerts the current month in words. 
// For example December. 

// var a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date () .getMonth()
// document.write("Current month: " + a[date])

// 3. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show 
// Sun. 

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri" , "Sat"];
//   var now = new Date();
//   var theDay = now.getDay();
//   var nameOfToday = dayNames[theDay];
//   document.write("Today is " + nameOfToday)

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri" , "Sat"];
//   var now = new Date();
//   var theDay = now.getDay();
//   var nameOfToday = dayNames[theDay];

// if (nameOfToday === "Sun" || nameOfToday === "Sun") {
    
//     document.write("It's Fun day ")

// }

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”. 

// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = theDay
// if (nameOfToday < 16) {
//     document.write("First fifteen days of the month")
// } else {
//     document.write("Last days of month")
// }

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object. 

// var d = new Date () 
// var millsSince = d.getTime()
// var second = millsSince/1000/60
// var a = Math.round(second.toFixed(0))
// document.write("Current Date: " + d +"<br>")
// document.write("Elapsed miilliseconds since january 1 , 1970: " + millsSince + "<br>")
// document.write("Elapsed minutes since january 1 , 1970: " + a)

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”. 

// var d = new Date ().getHours()
// if (d < 12 ) {
//     document.write("It's AM")
// } else {
//     document.write("It's PM")
// }

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate. 

// var d = new Date("12 31 2025")
// document.write("Later date: "  +  d)

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan? 
// Note: 1st Ramadan was on June 18, 2015 

// var d = new Date("3 11 2024")
// var now = new Date()
// var count = (now-d)/1000/60/60/24
// var round = Math.ceil(count)
// document.write(round + " days have passed since 1st Ramadan,2024")

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var d = new Date("12 31 2024")
// var now = new Date()
// var count = (d-now)/1000
// var round = Math.ceil(count)
// document.write("on Refrence date " + d + round + " Seconds had passed since begginning of 2024")

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser. 

// let currentDat = new Date()
// let currentDate = new Date();
// let currentHours = currentDate.getHours();
// currentDate.setHours(currentHours - 1);
// alert("current date: " , currentDat , " 1 hour ago,it was " , currentDate);

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// let currentDat = new Date()
// let currentDate = new Date();
// let currentHours = currentDate.getFullYear();
// currentDate.setFullYear(currentHours - 100);
// document.write("current date: " , currentDat , " 100 years ago,it was " , currentDate);

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser. 

// let age = +prompt("Enter your age ")
// let currentDat = new Date()
// let currentDate = new Date();
// let currentHours = currentDate.getFullYear();
// let currentDa = (currentHours - age);
// document.write("Your age is " , age , "<br>");
// document.write("Your birth year is " , currentDa)

// 14. Write a program to generate your K-Electric bill in your 
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) 
// Where, 

// var a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date () .getMonth()
// var random = Math.random()*500
// var round = Math.round(random)
// var bill = round*16
// var lateChar = round-55
// var gross = lateChar+bill
// document.write("<h1>K-Electric Bill</h1>")
// document.write("Customer Name: <b>ABC customer</b><br>")
// document.write("Month: " + a[date] ,"<br>")
// document.write("Number of units: " , round , "<br>")
// document.write("Charges per unit : <b>16</b><br><br>")
// document.write("Net Amount Payable (within Due Date): ",   bill  ,"<br>")
// document.write("Late Payment Surcharge: " ,lateChar , "<br>")
// document.write(" Gross Amount Payable (after Due Date): " ,  gross)







