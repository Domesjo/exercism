class Cipher {
  constructor(key = this.generateRandomKey()) {
    if (key.match(/^[a-z]+$/)) {
      this.key = key;
      this.alpa = 'aqzwsxedcrfvtgbyhnujmikolp';
      this.cipher = '';
    } else {
      throw Error('Bad key');
    }
  }

  encode(str) {
     this.key = str;
    return this.key;
  }

  decode(str) {
    return this.key;
  }

  generateRandomKey() {
    let key = '';
    for (let i = 0; i < 100; i++) {
      key += this.alpa[Math.floor(Math.random() * 26)];
    }
    return key;
  }

}

export default Cipher;
