function mergeSort(array) {
    // Base case: an array with 1 or 0 elements is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Find the middle index
    const middleIndex = Math.floor(array.length / 2);

    // Split the array into left and right halves
    const leftHalf = array.slice(0, middleIndex);
    const rightHalf = array.slice(middleIndex);

    // Recursively sort each half
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return mergeSubLists(sortedLeft, sortedRight);
}

function mergeSubLists(leftList, rightList) {

    let sortedArray = [];
    let i = 0, j = 0;

    // Merge the two lists while both have elements
    while (i < leftList.length && j < rightList.length) {
        if (leftList[i] < rightList[j]) {
            sortedArray.push(leftList[i]);
            i++;
        } else {
            sortedArray.push(rightList[j]);
            j++;
        }
    }

    // If there are remaining elements in the left list, add them
    while (i < leftList.length) {
        sortedArray.push(leftList[i]);
        i++;
    }

    // If there are remaining elements in the right list, add them
    while (j < rightList.length) {
        sortedArray.push(rightList[j]);
        j++;
    }

    return sortedArray;
}

// Example usage:
const array = [4, 19, 7, 1, 9, 22, 6, 13, 10];  // Added an extra element (10)
const sorted = mergeSort(array);
console.log(sorted);  // prints [1, 4, 6, 7, 9, 10, 13, 19, 22]
