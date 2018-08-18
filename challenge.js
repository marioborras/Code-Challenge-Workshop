/* 1) write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. the string should start with a 1. a string with size 6 should return :'101010'. with size 4 should return : '1010'. with size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers. */

function stringy(size) {
    //start with an empty array
    let binary;
    //use a for looop
    for (var i = 1; i <= size; i++)  {
        //increment with modulus operator to do 0 and 1 over and over
        binary += i % 2;
      } 
    return binary;
  }
  
  console.log(stringy(100));
  

  /* 2) Given a non-negative integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3] */


  function switcher(num) {
    //start with an emoty array. We will fill it up at the end
  var result =[]
  //this code will take a set of numbers, make it a string, split them to an array and then reverses it. I couldm't find a way not to make the numbers a string.
  let arr = num.toString().split("").reverse()
  // pushes the integers into the empty array with this for loop
    //the +in front of the arr converts it into the an integer
for (var i=0;i< arr.length; i++) { 
      result.push(+arr[i])
        }
  
  console.log(result)
}

switcher(1234567)

/*Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers? 
Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps
*/
// the num provides how large of an array you want. 10 will give you the first
//10 integers in the fibonnaci sequence.
function fib(num){
    num = num - 4;
    //we need thiese to be 0 and 1 to add the beginning and declare some variables
     let a = 0;
     let b = 1;
     let result = b;
     //start with an array of 0 and 1 to add on to
     let myArr= [0,1];
     for (let i=0; i<num;i++){
         //redefine result and add vairables
       result = a+b
       //push it to the array
       myArr.push(result)
       //update be so its now A and numbers go up
     a=b;
     //update b to result to grow b as well and start the process all over again.
     b=result;
    
     }
     console.log(myArr)
   }
   
   fib(10)

/*Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"*/

  function checkCoupon(input){
  //use the built in functions to compare the date on the coupon vs todays date.
    if (Date.parse(input) > Date.now() ) {
      
          return true;
  
    }else{
      
      return false;      
  }
  }
  
  console.log(checkCoupon("Mar 1, 2001"))
  
  console.log(checkCoupon("Aug 18, 2018"))



  /*For the purposes of this assessment, here is what makes a valid email:
-Atleast one letter character at the beginning.
-All characters between the first character and the @ (if any) must be letters, numbers, or underscores.
-There must be an @ character (after the points listed just now).
-After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen.
-The email must end with at least one set of a dot followed by one or more word characters. 
-The input must NOT be case-sensitive The function should return true or false.*/

function validateEmail(input){
    //regular expressions helps doing this/
    //putting an i a the end keeps it case insensative.

let reg = /^([a-z]\w+)@([a-z\d\-]+).[a-z]+$/i

//compare the reg ex against with .test if if it matches
//.test will give either truer or false value. if true returns true or returns false. 
    if (reg.test(input)) {
        return true;
    }
        return false;

}

validateEmail('mario@gmail.com')