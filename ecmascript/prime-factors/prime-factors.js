class PrimeFactors {

  for(int) {
    const number = int;
    const primes = [];
    let start = 2;
    while (int !== 1) {
      while (int % start === 0) {
        if (int % (start + 1) !== 0) primes.push(start);
        int = int / start;
      }
      if ((start * (start + 1)) === number) return [start, start + 1];
      start += 1;
    }
    return primes;
  }
}
// const p = new PrimeFactors();
// console.log(p.for(6));
export default PrimeFactors;
