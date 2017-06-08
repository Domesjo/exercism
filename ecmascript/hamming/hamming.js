const Hamming = function(){};
Hamming.prototype.compute = function(dna1, dna2){
  if(dna1.length !== dna2.length) throw new Error('DNA strands must be of equal length.');
  let score = 0;
  const base = dna1.split('');
  base.forEach((str, i)=>{
    if(dna2.charAt(i) !== str) score++;
  });
  console.log(score);
  return score;
};
console.log(Hamming);
export default Hamming;
