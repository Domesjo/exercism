export default class DiffieHellman { // Takes two arguments p and g
  constructor(p, g) { // p has to be  p > 1 => TRUE && both has to be a prime number
    if (p > 1 && this.isPrime(p) && this.isPrime(g)) {
      this.p = p;
      this.g = g;
    } else {
      throw new Error('NOPEE');
    }
  }

  isPrime(value) {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) return false;
    }
    return value > 1;
  }

  getPublicKeyFromPrivateKey(p) {
    if (p <= 1 || p >= this.p) throw new Error('Has to bigger than 1');
    // Get the public key g**a % p
    return (this.g ** p) % this.p
  }

  getSharedSecret(privateKey, pk) {
    // get shared key s = A**a mod p
    // Bobs Public key ** Alice publicKey % this.p
    return (pk ** privateKey) % this.p
  }
}
