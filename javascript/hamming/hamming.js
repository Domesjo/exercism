var Hamming = function() {};

Hamming.prototype.compute = function( dnaA, dnaB ){
  if(dnaA.length !== dnaB.length){ throw 'DNA strands must be of equal length.' }
  var index = 0;
  var result = 0;
  dnaArray = dnaA.split('');
  dnaArray.forEach(function(str){
    if(!(str === dnaB.split('')[index])){
      console.log(str, dnaB.split('')[index]);
      result+= 1;
    };
    index++;
  });
  return result;
}

module.exports = Hamming;
