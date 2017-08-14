class PrimeFactors {

  for(int) {
    const primes = [];    
    while (int !== 1) {
      let start = 2;
      while (int % start === 0) {
        int = int / start;
      }
      primes.push(start);
      start++;
    }
  }

}

export default PrimeFactors;
