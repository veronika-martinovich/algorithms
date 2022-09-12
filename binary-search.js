const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0; // O(log2 n)
let countRecursive = 0; // O(log2 n)

// iterative
function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;

  while (!found && start <= end) {
    // count += 1;
    middle = Math.floor((start + end) / 2);

    if (array[middle] === item) {
      found = true;
      return middle;
    }
    if (array[middle] > item) {
      end = middle - 1;
    }
    if (array[middle] < item) {
      start = middle + 1;
    }
  }
  return null;
}

console.log(binarySearch(arr, 15));
console.log("count: ", count);

// recursive
function binarySearchRecursive(array, item, start, end) {
  countRecursive += 1;
  const middle = Math.floor((start + end) / 2);
  if (item === array[middle]) return middle;
  if (item > array[middle]) return binarySearchRecursive(array, item, middle + 1, end);
  if (item < array[middle]) return binarySearchRecursive(array, item, start, middle - 1);
}

console.log(binarySearchRecursive(arr, 15, 0, arr.length));
console.log("countRecursive: ", countRecursive);
