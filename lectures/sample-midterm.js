const util = require('util');

const reduce = (array, reducer) => {
  let result = array[0];
  for (let i=1; i < array.length; i+=1) {
    result = reducer(result, array[i]);
  }
  return result;
}

console.log(reduce([1, 2, 3], (acc, val) => acc + val))

// console.log("Please enter a time to wait in ms:");
// process.stdin.once('data', (data) => {
//   const wait = parseInt(data, 10);
//   setTimeout(() => {
//       console.log(`Waited!`);
//       process.exit();
//   }, wait);
// });

// getInput = () => {
//   return new Promise(resolve => process.stdin.once('data', resolve));
// }

// waitMs = ms => {
//   return new Promise(resolve => setTimeout(resolve, ms));
// };

// console.log('Please enter a time to wait in ms:');
// const input = util.promisify(process.stdin.once);
// getInput().then(data => {
//   const wait = parseInt(data, 10);
//   return waitMs(wait);
// }).then(() => {
//   console.log(`Waited!`);
//   process.exit();
// })

