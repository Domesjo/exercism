export default class Anagram{
  constructor(word){
      this.word = word.toLowerCase();
      this.comparer = word.toLowerCase().split('').sort().join('');
  }

  matches(arr) {
    arr = Object.values(arguments);
    if( typeof arr[0] === 'object') arr = arr[0];
    const matches = [];
    arr.forEach((word) => {
      const processedInput = word.toLowerCase().split('').sort().join('');
      if(this.comparer === processedInput && this.word !== word.toLowerCase()) matches.push(word);
    });
    return matches;
  }
}
