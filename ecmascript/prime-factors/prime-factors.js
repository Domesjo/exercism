class PrimeFactors {

  for(int) {
    const primes = [];
    let start = 2;
    while (int !== 1) {
      while (int % start === 0) {
        int = int / start;
        if (int % (start + 1) !== 0) primes.push(start);
      }
      start += 1;
    }
    return primes;
  }
}
 // const p = new PrimeFactors();
 // console.log(p.for(6));
export default PrimeFactors;
