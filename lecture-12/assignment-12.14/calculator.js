/* EXTRA

Create a class Calculator. The calculator has a method calculate(operator:
 string, n1: number, n2: number, ... ). The first parameter is the name of the operation,
 and the following parameters are an arbitrary amount of numeric parameters. 
 
The calculate method performs the operation defined by the operator parameter to
 all parameters one by one, using the result of the previous operation in the next operation.

For example, if one would run calculate('+', 1, 3, 5, 7, 11, 13), the calculator
 would execute a summation. It would start by calculating the sum of the first and
 the second numeric parameters, 1 + 3 = 4. Then it would add the third parameter
 to the result, 4 + 5 = 9. Then it would add the next parameter to that that result, 
 getting 9 + 7 = 16, and continuing like this to the end. Finally it would return 
 the result of 40.

When first initiated, a Calculator object should be able to handle multiplication ("+")
 or substraction ("-"). It should also have a method addOperation that can be used to 
 add more operations. You should be able to use the addOperation to add any operation 
 that takes two numbers as parameters and returns a new number.

For example, one should be able to add a multiplication operation, after which the user
 could run calculate('*', 2, 4, 6), getting 48 as a result. */

/* Notes:
Typo in instructions. "handle multiplication ("+")" should say "handle summation ("+")"".
Program can be run in CodeRunner. Didin't bother to create command line interface. For that,
see assignment 12.12 */

class Calculator {

  constructor() {
    this.operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b 
    };
  }

  calculate(operation, ...numbers) {
    let acc = 0;
    let info = ""; // My own extra. Print the operation as well as result
    if (numbers.length > 0) {
      if (operation === "*" || operation === "/") {
        // For multiplication or division have to start from 1
        acc = 1;
      }
      info = acc.toString();
      for (let i = 0; i < numbers.length; i++) {
        // perform the requested operation for all given numbers and accumulate the result
        acc = this.operations[operation](acc, numbers[i]);
        // memorize the operation as text
        info += " " + operation + " " + numbers[i].toString();
      }
    }
    return info  + " = " + acc;
  }

  addOperation(name, operation) {
    this.operations[name] = operation;
  }
}

const calc = new Calculator();
console.log("\nWelcome to my dummy calculator. Some operations:\n");
console.log(calc.calculate('+', 1, 3, 5, 7, 11, 13));
console.log(calc.calculate('-', 1, 3, 5, 7, 11, 13));
calc.addOperation('*', (a, b) => a * b);
console.log(calc.calculate('*', 2, 4, 6));
calc.addOperation('/', (a, b) => a / b);
console.log(calc.calculate('/', 1, 2, 3));