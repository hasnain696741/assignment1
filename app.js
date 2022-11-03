// 1. Write a script to display the following message on your web page:
// (Hint : Use line break)?

alert('Welcome to JS Land\nHappy Coding!')

// 2. Write a script to save student’s bio data in JS variables and show the
// data in alert boxes.?

 alert( 'Muhammad Hasnain');
 alert(18);
    alert('Certified Mobile Application Development');

// 3. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com). Show
// the below mentioned message in an alert box.(Hint: use string
// concatenation)

var email = 'Muhammadhasnain@gmail.com'
alert('My Email is ' +email)

// 4. Write a script to display this in browser through JS

document.write('Yah! I can write HTML content through JavaScript')

// 5. Declare a variable called age & assign to it your age. Show your age
// in an alert box

 var age = '18'
alert('I am ' + age+ "years old")

// 6. Declare a variable called birthYear & assign to it your birth year.
// Show the following message in your browser:

var birthYear = '2004'
document.write('My birth year is ' + birthYear+ 'Data type of my declared variable is number' )

// 8. Write a program that takes two numbers & add them in a new
// variable. Show the result in your browse

var  num1 = 3 
var  num2 =   2 
var oper = num1 + num2
document.write('Sum of '+ num1+' and '+num2  +' is '+oper)

// 9. Repeat task 8 for subtraction, multiplication, division & modulus.
// 9.Subtraction
var  num1 = 3 
var  num2 =   2 
var oper = num1 - num2
document.write('Subtraction of '+ num1+' and '+num2  +' is '+oper)

// 9.Multiplication
var  num1 = 3 
var  num2 =   2 
var oper = num1 * num2
document.write('Multiplication of '+ num1+' and '+num2  +' is '+oper)

// 9. Modulus
var  num1 = 3 
var  num2 =   2 
var oper = num1 / num2
document.write('Modulus of '+ num1+' and '+num2  +' is '+oper)

var hard;

document.write('after value declaration is '+hard)
hard=5;
document.write('Initial value : ' +hard)
hard++;
document.write(' value after increment is: '+hard )
var add = hard +7
document.write('Value after addition  is : '+add )
var decre = --add
document.write(' Value after decrement is : '+decre )
var dividing = decre/3
var div = 4%dividing;
document.write('The remainder is: '+ div)

// 11. The Temperature Converter: It’s hot out! Let’s make a converter
// based on the steps here.

var Degree_Celcius = 25
var Convert_into_Faranhiet = (Degree_Celcius *9/5) +32
document.write(Degree_Celcius + '\u00B0C is ' + Convert_into_Faranhiet + ' \u00B0F')

var faranhiet = 70
var Convert_into_Celcius = (faranhiet -32) * 5/9
document.write(faranhiet + '\u00B0F is ' + Convert_into_Celcius +' \u00B0C')

// 12. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to
// convert the total currency to Pakistani Rupees. Perform all
// calculations in a single expression. (Exchange rates : 1 US Dollar =
// 155 Pakistani Rupee and 1 Saudi Riyal = 41 Pakistani Rupee)

var dollar = 10*155
var Riyal = 25*41
var total = dollar + Riyal
document.write('Total Currency in PKR ' )
document.write('Total Currency in PKR: '+ total)

//13 Write a program to take a number in a variable, do the required
// arithmetic to display the following result in your browser:

var a = 10
document.write("Result: " +'The value of a is: '+ a )

++a
document.write('The value of ++a is: '+ a   )
document.write('Now value of a is: '+ a    )

document.write('The value of a++ is: '+ a  )
a++
document.write('Now value of a is: '+ a   )
--a
document.write('The value of --a is: '+ a  )
document.write('Now value of a is: '+ a   )

document.write('The value of a-- is: '+ a  )
a--
document.write('Now value of a is: '+ a)

// 14. What will be the output in variables a, b & result after execution of
// the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


var a = 2,
 b = 1;
 var result1 = --a
document.write('--a is: '+result1 + '<br>' )
var result2 =--a - --b
document.write('--a - --b is: '+result2)
var result3 = --a - --b + ++b
document.write('--a - --b + ++b is: ' +result3 + '<br>')

var result4 = --a - --b + ++b +b--
document.write('--a - --b + ++b +b-- is: ' +result4)
 