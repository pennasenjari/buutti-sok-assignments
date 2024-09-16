// sort array so tha blues come first
let line =  ["blue","yellow","yellow","blue","blue","yellow","yellow","blue"];
let temp = "";

console.log("Sorting array so that blue items come first and yellow items after.");
console.log("Original array:");
console.log(line);

// pointer 1
for (i = 0; i < line.length; i++) {
  // pointer 2
  for (j = 0; j < line.length; j++) {
    // compare items only when second pointer is right from first pointer
    if (j > i && line[i] === "yellow" && line[j] === "blue") {
      // yellow is first, switch places
      temp = line[i];
      line[i] = line[j];
      line[j] = temp;
    }
  }
}

console.log("Sorted array:");
console.log(line);

    