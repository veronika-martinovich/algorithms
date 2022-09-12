const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count = 0; // O(log2 n * n)

// choses pivot elem, splits array on 2 new arrays: in one arr there are elems greater than pivot, in another - less than pivot, recursively repeats
function quickSort(array) {
  if (array.length <= 1) return array;

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  const lessOrEqual = [];
  const greater = [];
  for (let i = 0; i < array.length; i++) {
    //count += 1;
    if (i === pivotIndex) continue;

    if (array[i] <= pivot) {
      lessOrEqual.push(array[i]);
    }

    if (array[i] > pivot) {
      greater.push(array[i]);
    }
  }

  return [...quickSort(lessOrEqual), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
console.log("count: ", count);
