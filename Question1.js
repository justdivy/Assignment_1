const words = ['hello', 'world', 'abcedf', 'goodbye'];

function wordsInOrder(arr) {
  return arr.filter(word => {
    const sortedWord = word.split('').sort().join('');
    return sortedWord === word;
  });
}

console.log(wordsInOrder('hello', 'world', 'abcedf', 'goodbye'));