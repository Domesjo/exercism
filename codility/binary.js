const n = 1041;
function solution(n){
  const binary = (n >>> 0).toString(2);
  let longest = 0;
  let streak = 0;
  binary.split('').forEach((i) => {
    if(parseInt(i) === 0) {
      streak++;
      if(streak > longest) longest = streak;
    } else {
      streak = 0;
    }
  });
  console.log(longest);
  return longest;
}

solution(n);
