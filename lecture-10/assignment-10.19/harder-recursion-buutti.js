function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // Use splice to split the array into right
  // and left parts
  const right = array.splice(array.length / 2);
  const left = array;

  // Sort these sub-lists
  mergeSort(right);
  mergeSort(left);

  // Merge the sorted sub-lists
  mergeSubLists(left, right);

  // Return the "left list" that has had
  // all the elements of the right list added into itself
  // iow. return the final, fully sorted list
  return left;
}

function mergeSubLists(leftList, rightList) {
  // Go through the right list one element at a time and
  // add the elements to the correct spot in the left list

  for (number of rightList) {
    let inserted = false;

    for (let i = 0; i < leftList.length; i++) {
      if (number <= leftList[i]) {
        leftList.splice(i, 0, number);
        inserted = true;
        break;
      }
    }

    // If the number wasn't inserted to the left list
    // in the loop, the number is greater than any
    // number in the right list - add it to the end instead
    if (!inserted) {
      leftList.push(number);
    }
  }
}

// EXTRA: added one more number (8) to the array
const array2 = [4, 19, 7, 1, 9, 8, 22, 6, 13];
const sorted = mergeSort(array2);
console.log(sorted); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]