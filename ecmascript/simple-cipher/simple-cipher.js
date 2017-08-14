class Cipher {
  constructor(key = this.generateRandomKey()) {
    if (key.match(/^[a-z]+$/)) {
      this.key = key;
      this.cipher = '';
      this.a_ascii = 'a'.charCodeAt(0);
      this.z_ascii = 'z'.charCodeAt(0);
    } else {
      throw Error('Bad key');
    }
  }

  encode(str) {
    return str.split('')
    .map((letter, index) => {
      let c = letter.charCodeAt(0) + this.key[index % this.key.length].charCodeAt(0);
      c -= 2 * this.a_ascii;
      c %= ((this.z_ascii - this.a_ascii) + 1);
      c += this.a_ascii;
      return String.fromCharCode(c);
    }, this)
    .join('');
  }

  decode(str) {
    return str.split('')
      .map((letter, index) => {
        let c = letter.charCodeAt(0) - this.key[index % this.key.length].charCodeAt(0);
        c %= ((this.z_ascii - this.a_ascii) + 1);
        c += this.a_ascii;
        return String.fromCharCode(c);
      }, this)
  .join('');
  }

  generateRandomKey() {
    let key = '';
    this.alpa = 'aqzwsxedcrfvtgbyhnujmikolp'.split('').sort().join('');
    for (let i = 0; i < 100; i++) {
      key += this.alpa[Math.floor(Math.random() * 26)];
    }
    return key;
  }

}

export default Cipher;
