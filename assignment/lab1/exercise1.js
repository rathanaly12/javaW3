/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 1 (functions)  [BARE-SPEC]
   ----------------------------------------------------------------
   TASK
     1. Function DECLARATION  add(a, b)      → a + b
     2. Function EXPRESSION   subtract(a, b) → a - b
     3. Arrow, no braces      multiply = (a, b) => a * b
     4. Arrow, 1 param        double = n => n * 2
     5. Arrow, WITH braces (needs `return`)  divide = (a, b) => {...} → a / b
     6. Function DECLARATION  greet(name = "Guest") → "Hello, " + name + "!"
     7. CALLBACK: write announce(name, callback) — it calls
        callback() and returns "Hello, " + name + " | " + the
        callback's result. Write sayBye() → "Goodbye!". Then call
        announce("Alice", sayBye).
     8. Call all of the above, print the results below.

   EXPECTED OUTPUT
     resultAdd: 7
     resultSubtract: 6
     resultMultiply: 15
     resultDouble: 12
     resultDivide: 5
     greetDefault: Hello, Guest!
     greetNara: Hello, Nara!
     announcement: Hello, Alice | Goodbye!

   RUN:  node assignment/lab1/exercise1.js
   ================================================================ */

// Write your code below.
function add(a,b){
  console.log("resultAdd: ",a+b);
}
add(4,3);


//2
function subtract(a,b){
  console.log("resultSubstract: ",a-b);
}
subtract(7,1);


//3
const multiply= (a,b) => a*b;
console.log("resultMultiply: " ,multiply(3,5));


//4
const double=n =>n*2;
console.log("resultDouble: ",double(6));

//5
const divide =(a,b) =>{
  console.log("resultDivide: ",a/b);
}
divide(15,3);

//6 
function greet(name="lyrathana"){
  console.log("Heloo ,"+name+"!");
}
greet();
//7
function announcement(name,callback){
  console.log("greet",name,":","Hello,"+name+"!");
  callback();
}
function sayBye(){
  console.log("Goodbye!");
}
announcement("lyrathana",sayBye);
