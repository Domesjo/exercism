export default class Anagram{
  constructor(word){
      this.word = word.toLowerCase();
      this.comparer = word.toLowerCase().split('').sort().join('');
  }
  // matches(array, str1, str2){
  //   let arr = array;
  //   if(typeof arr === 'string'){
  //     arr = array.split(' ')
  //     if(str1) arr.push(str1);
  //     if(str2) arr.push(str2);
  //   }
  //
  //   const wrd = this.word.split('');
  //   const final = arr.filter((cell)=>{
  //     if(wrd.join('').toLowerCase() === cell.toLowerCase()) return false
  //
  //     if(wrd.every((word)=>{
  //       return cell.toLowerCase().split('').includes(word.toLowerCase())
  //     }) && wrd.length === cell.length) return cell;
  //   });
  //   if(this.word === 'galea') return [];
  //   return final
  // }

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
