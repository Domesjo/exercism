class SecretHandshake {
  constructor(hexaDecimal) {
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
    const keys = Object.keys(this.handShakes).reverse(); // returns the keys from objects so I can loop through
    while (this.binary > 0) {
      keys.forEach((key) => {
        if (this.binary - parseInt(key) >= 0) {
          this.handShake.push(this.handShakes[key]);
          this.binary -= parseInt(key);
        }
      });
    }
    return this.handShake;
  }
}

export default SecretHandshake;
