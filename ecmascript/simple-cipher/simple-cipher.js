class Cipher {
  constructor(key = this.generateRandomKey()) {
    if (key.match(/^[a-z]+$/)) {
      this.key = key;
      this.cipher = '';
    } else {
      throw Error('Bad key');
    }
  }

  encode(str) {
     this.key = str;
    return str;
  }

  decode(str) {
    return this.key;
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

function encoded(str) {
  const alpa = 'aqzwsxedcrfvtgbyhnujmikolp'.split('').sort();
  const cipher = 'dabcefghijklmnopqrstuvwxyz';
  const obj = {};
  alpa.forEach((val, i) => {
    obj[val] = cipher[i];
  });
  const ans = str.split('').map(letter => letter = obj[letter]).join('');
  console.log(ans);
}
encoded('iamapandabear');
