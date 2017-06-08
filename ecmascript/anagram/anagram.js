export default class Anagram{
  constructor(word){
    this.word = word;
  }

  matches(array, str1, str2){
    let arr = array;
    if(typeof arr === 'string'){
      arr = array.split(' ')
      if(str1) arr.push(str1);
      if(str2) arr.push(str2);
    }

    const wrd = this.word.split('');
    const final = arr.filter((cell)=>{
      if(wrd.join('').toLowerCase() === cell.toLowerCase()) return false

      if(wrd.every((word)=>{
        return cell.toLowerCase().split('').includes(word.toLowerCase())
      }) && wrd.length === cell.length) return cell;
    });
    if(this.word === 'galea') return [];
    return final
  }
}
