const Transcriptor = function(){
  this.toRna = function (letter){
    const outPut = [];
    let dna = letter;
    const trans = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U'
    };
    if(!Object.keys(trans).includes(letter[0])) throw new Error('Invalid input DNA.');
    if(letter.length === 1) return trans[dna];
    else if(letter.length > 1){
      dna.split('').map((str)=>{
        if(!Object.keys(trans).includes(str)) throw new Error('Invalid input DNA.');
        outPut.push(trans[str]);
      });
    }
    return outPut.join('');
  };
};


export default Transcriptor;
