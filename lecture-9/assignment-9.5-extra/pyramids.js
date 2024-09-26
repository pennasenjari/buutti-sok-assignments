/* EXTRA
In lecture material
Using the for loop for each problem, print out the following patterns:

*
**
***
****
*****
******
*******
********
*********
**********

         * 
        *** 
       ***** 
      ******* 
     ********* 
    ***********
   *************
  ***************
 ***************** 
*******************

     *
    ***
   *****
  *******
 *********
***********
 *********
  *******
   *****
    ***
     *

*/

function printTriangle(rows = 10, shape = "pyramid", paddingLeft = 0) {

  output = "";

  // Default shape: Pyramid
  let stars = 1; // = asterisks
  let spaces = rows + 1 + paddingLeft; // paddingLeft = move the triangle to the right

  if (shape === "rectangle") {
    spaces = 0;
  } else  if (shape === "flippedPyramid") {
    stars = rows * 2 - 1;
    spaces = paddingLeft;
  }

  // print 1 row at a time, starting from the top
  for (let i = 0; i < rows; i++) {
    output += " ".repeat(spaces);
    output += "*".repeat(stars);
    if (shape === "rectangle") {
      // add 1 star per row (spaces remain 0)
      stars++;
    } else if (shape === "pyramid") {
      // remove a space, add 2 stars per row
      spaces--;
      stars += 2;
    } else if (shape === "flippedPyramid") {
      // add 1 space, remove 2 stars per row
      spaces++;
      stars -= 2;
    }
    output += "\n"; // end row
  }
  
  return output;
}

console.log("\nShape 1, rectangle:\n");
console.log(printTriangle(10, "rectangle"));

console.log("Shape 2, pyramid:\n");
console.log(printTriangle(10, "pyramid"));

console.log("Shape 3, diamond:\n");
console.log(printTriangle(6, "pyramid") + printTriangle(5, "flippedPyramid", 3));