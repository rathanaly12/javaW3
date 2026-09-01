/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 2 (array fundamentals)
   [BARE-SPEC]
   ----------------------------------------------------------------
   TASK
     1. let colors = ["Red", "Green", "Blue"];
     2. firstColor = colors[0]
     3. lastColor  = colors.at(-1)
     4. colorCount = colors.length
     5. colors[1] = "Emerald"    (replaces index 1)
     6. colors[3] = "Yellow"     (index past the end → array grows)
     7. let mixedArr = ["Apple", 11, true];   (arrays can mix types)
     8. Print colors, firstColor, lastColor, colorCount, mixedArr.

   EXPECTED OUTPUT
     colors: [ 'Red', 'Emerald', 'Blue', 'Yellow' ]
     firstColor: Red
     lastColor: Blue
     colorCount: 3
     mixedArr: [ 'Apple', 11, true ]

   RUN:  node assignment/lab1/exercise2.js
   ================================================================ */

// Write your code below.
let colors=["Red","Green","Blue"];
firstcolor =colors[0];
lastcolor= colors.at(-1);
colorCount =colors.length;
colors[1]="Emerald";
colors[3]="Yellow";
let mixedArr=["Apple",11,true];
console.log("colors:"+"["+colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+"]");
console.log("firstColor: ",firstcolor);
console.log("lastcolor: ",lastcolor);
console.log("colorCount: ",colorCount);
console.log("mixedArr: "+"["+mixedArr[0]+","+mixedArr[1]+","+mixedArr[2]+ "]");
