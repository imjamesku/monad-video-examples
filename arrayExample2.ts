const arr1 = [1, 2, 3];
const arr2 = [10, 20, 30];

function example1(): Array<number[]> {
  return arr1.flatMap((x) => arr2.map((y) => [x, y]));
}

// do function example(): Array<number[]> {
//   const arr1 = [1, 2, 3];
//   const arr2 = [10, 20, 30];
//   const a = bind arr1;
//   const b = bind arr2;
//   return [a, b];
// }

console.log(example1());
