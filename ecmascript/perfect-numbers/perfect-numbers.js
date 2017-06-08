function PerfectNumbers(){
}
PerfectNumbers.prototype.classify = (num)=>{
  if(num===1) return 'deficient';
  if(num <= 0) return 'Classification is only possible for natural numbers.';
  let int = num;
  let answer;
  let temp = 0;
  for(let i = 1;i<= int/2; i++){
    if(int%i=== 0) temp+= i;

    if(temp === int)  answer='perfect';

    else{
      (temp > int) ? answer='abundant': answer='deficient';
    }
  }
  return answer;
};


module.exports = PerfectNumbers;
