class Cipher {
  constructor(key = this.generateRandomKey()) {
    this.key = key;
  }

  encode(str) {
    this.key = str;
    return str;
  }

  decode() {
    return this.key;
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
