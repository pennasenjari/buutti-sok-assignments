/* 
a) Create a variable in the global scope for language.

Then, create a function named hello. The function should print "Hello World!" 
  in the specified language (for example, "fi", "en", "es"). At least 3 languages 
  need to be supported.

Call your function to make sure it works.
 
b) Remove the language variable from the global scope and instead add it 
  as a parameter to your hello function.

Call your hello function 3 times with different values for the language parameter to 
  make your program print "Hello World!" to the console with 3 different languages. */

// a)
// const locale = "ee";

function hello(locale = "en") { // b)

  switch (locale) {
    case "fi":
      console.log("Hei maailma!");
      break;
    case "en":
      console.log("Hello world!");
      break;
    case "sv":
      console.log("Hej världen!")
      break;
    case "ee":
      console.log("Tere maailm!");
      break;
  }  
}

// a) 
hello();

// b)
hello("fi");
hello("sv");
hello("ee");



