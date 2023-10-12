function nextPos(pos: number) {
  return [pos + 2, pos - 1];
}
const initialPos = 0;

function flatMapExample() {
  const initialPos = 0;
  return nextPos(initialPos).flatMap(nextPos);
}

console.log(nextPos(initialPos)); // [2, -1]
console.log(nextPos(initialPos).flatMap(nextPos)); // [4, 1, 1 -2]
console.log([initialPos].flatMap(nextPos).flatMap(nextPos).flatMap(nextPos));

// do function ex() {
//   const initialPos = 0;
//   const n = bind nextPos(initialPos);
//   const nn = bind nextPos(n);
//   return nn;
// }
