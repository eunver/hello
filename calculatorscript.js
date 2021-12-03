alert("Welcome to calculator");
/*promptname function asks user name and greets the user with his/her name  */
function promptname() {
   person = prompt("Please enter your name");  //person is deliberately left as a global variable as to use in other function
    if (person != null) {
      alert("Welcome "+person+"!")
    }
}
/* addition function makes the calculation and keeps the log of the calculations in an array  */
function addition() {
  var calclog =[];    // calculation logs container
  do {    //first addition will always be executed, so do-while loop is used 
  const number1 = parseFloat(prompt("Please enter a number"));
  const number2 = parseFloat(prompt("Please enter another number"));
  result = number1+number2;
  if(!isNaN(result)) {     // Check for non-numeric entry
    alert("The sum of your two numbers is: " + result); 
    calclog.push(number1 + " add " + number2+ " equal to " + result); }
    else{
      alert("You did not enter a number! To start again, click Let's Start!") // If any of the entries is non-numeric, alert user to start over
      return null;
    }
  if(result>10) {
    alert("That is a big number");}
    else{ 
    alert("That is a small number");
  }
  var answer = prompt("Would you like to add two numbers again? (yes/no)");
  }
  while(answer=="yes");
   alert("Thanks for using the program!"); // if answer is not yes

   /*For the purpose of going beyond of the requirements, the log of the calculations is added below*/
   var list = document.getElementById("log");
   document.getElementById("logtext").innerHTML= person + "! Below is the log of your calculations!"  //the use of person variable
   calclog.forEach((item) => {
       var li = document.createElement("li");
       li.innerText=item;
       list.appendChild(li);
     })
   return null;
}
