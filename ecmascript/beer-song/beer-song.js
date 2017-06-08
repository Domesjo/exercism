 const Beer = function Beer(){}
 Beer.verse = (int)=>{
   if(!int) return Beer.out;

   let beer = int;
   let answer;
   let bottles = int===1? 'bottle': 'bottles';
   let after = isZero(int)? 'no more': int-1;
   let singular = isZero(int) ? 'it': 'one';

   function several(){
     answer = `${beer} ${bottles} of beer on the wall, ${beer} ${bottles} of beer.
Take ${singular} down and pass it around, ${after} bottles of beer on the wall.
`
      }
          several();
   return answer;
 }
 Beer.out = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`;
 function isZero(int){
   return int-1 === 0
 }

 Beer.sing = (int1, int2)=>{
   let start = int1 || 99;
   const stop = int2 || 0;
  let song = [];

  for(start; start >= stop ; start--){
    const beer = start;
    let bottles = start === 1? 'bottle': 'bottles';
    let final = start === 2? 'bottle' : 'bottles'
    let after = isZero(start)? 'no more': start-1;
    let singular = isZero(start)? 'it' : 'one';
    const last = start=== stop? '':'\n';
    let verse = start===0 ?`${Beer.out}` :`${beer} ${bottles} of beer on the wall, ${beer} ${bottles} of beer.
Take ${singular} down and pass it around, ${after} ${final} of beer on the wall.${last}
`
    song.push(verse);
  }
  console.log(song.length);
  return song.join('');
 }
module.exports = Beer;
