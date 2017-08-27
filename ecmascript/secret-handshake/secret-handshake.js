class SecretHandshake {
  constructor(hexaDecimal) {
    this.binary = hexaDecimal.toString(2);
  }

  commands() {
    return this.binary;
  }
}

export default SecretHandshake;
