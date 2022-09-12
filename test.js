var countChange = function (money, coins) {
  const optionsArr = [];
  const integersWithoutRest = [];

  coins.forEach((item) => {
    const rest = money % item;
    if (rest === 0) {
      optionsArr.push(Array(money / item).fill(item));
      integersWithoutRest.push(item);
    } else {
      if (coins.includes(rest)) {
        optionsArr.push([item, rest]);
      }
    }
  });

  if (integersWithoutRest.length === 0) return optionsArr.length;
  integersWithoutRest.forEach((item) => {
    const newCoins = coins.filter((i) => i < item);
    countChange(item, newCoins);
  });
};

console.log(countChange(10, [5, 2, 3]));

let matrix = [
  [5, 3, 6, 1],
  [5, 8, 7, 4],
  [1, 2, 4, 3],
  [3, 1, 2, 2],
];

function rotateLikeAVortex(matrix) {
  const newMatrixRows = {};
  const matrixCopy = [...matrix];

  matrixCopy.forEach((i) => {
    const reversed = [...i].reverse();
    reversed.forEach((j, idx) => {
      if (newMatrixRows[idx]) {
        newMatrixRows[idx].push(j);
      } else {
        newMatrixRows[idx] = [j];
      }
    });
  });

  return Object.values(newMatrixRows);
}

console.log(matrix, rotateLikeAVortex(matrix));
