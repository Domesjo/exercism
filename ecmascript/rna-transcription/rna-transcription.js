class Transcriptor {
  constructor() {
    this.trans =  {
          G: 'C',
          C: 'G',
          T: 'A',
          A: 'U'
        };
  }

  toRna(str) {
    if(!str.match(/^[G|C|A|T]+$/g)) throw Error("Invalid input DNA.");
    return str.match(/G|C|A|T/g).map(rna => this.trans[rna]).join('');

  }
}
// let t = new Transcriptor();
// console.log(t.toRna('C'));
export default Transcriptor;
