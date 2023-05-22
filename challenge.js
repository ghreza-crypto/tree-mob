function leftmostNodesSum(array) {
  let result = 0;
  let leftNode = 0;
  while (true) {
    if (leftNode >= array.length) {
      break;
    }else{
      result += array[leftNode];
      leftNode = 2 * leftNode + 1;
      // console.log(result);
      // console.log(leftNode);
    }
    
  }
  return result;
}

console.log(leftmostNodesSum([5, 3, 4, 11, 13, 15, 21, 10, 4, 7, 2, 8, 0, 9, 0]))
// => 11

module.exports = leftmostNodesSum
