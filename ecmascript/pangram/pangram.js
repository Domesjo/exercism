export default function Pangram(sen){
  this.isPangram = ()=>{
    if(!sen) return false;

    const chars = [].concat.apply([], Array(26))
      .map((_, i)=> { return String.fromCharCode(i+65); })
      .join().toLowerCase().split(',');
    const all = sen.toLowerCase().split('');

  const filtered = chars.filter((letter)=>{
    return !all.includes(letter);
  });
    if(filtered.length ===0) return true;
    return false

  }
}
