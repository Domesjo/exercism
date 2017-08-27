class SecretHandshake {
  constructor(hexaDecimal) {
    if (!parseInt(hexaDecimal.toString(2))) throw new Error('Handshake must be a number');
    this.binary = parseInt(hexaDecimal.toString(2)); // converts the hexadecimal to binary

    this.handShakes = { // all the different type of handshakes
      1: 'wink',
      10: 'double blink',
      100: 'close your eyes',
      1000: 'jump',
    };
    this.handShake = []; // the secret handshake
  }

  commands() {
    // if its an even number it shall reverse it otherwise it needs to count backwards
    const keys = this.binary % 2 === 0 ? Object.keys(this.handShakes).reverse() : Object.keys(this.handShakes);
    const bigger = this.binary > 10000;
     // returns the keys from objects so I can loop through

    while (this.binary > 0) {
      if (this.binary > 10000) this.binary -= 10000;
        keys.forEach((key) => {
          if (this.binary - parseInt(key) >= 0) {
            this.handShake.push(this.handShakes[key]);
            this.binary -= parseInt(key);
          }
        });
        return bigger ? this.handShake.reverse() : this.handShake;
    }
  }
}

export default SecretHandshake;
