class Cipher {
  constructor(key = this.generateRandomKey()) {
    if (key.match(/^[a-z]+$/)) {
      this.key = key;
    } else {
      throw Error('Bad key');
    }
  }

  encode(str) {
    this.encoded = str;
    return this.key;
  }

  decode(str) {
    return this.encoded;
  }

  generateRandomKey() {
    const alpa = 'aqzwsxedcrfvtgbyhnujmikolp';
    let key = '';
    for (let i = 0; i < 100; i++) {
      key += alpa[Math.floor(Math.random() * 26)];
    }
    return key;
  }

}

export default Cipher;
