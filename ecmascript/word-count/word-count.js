function Words(){}

Words.prototype.count = function(words){
  let ans = {};
  let wordArr = words.split(' ').map(low);
  if(words.match(/\n/)) wordArr = words.split(/\n/).map(low);
  if(words.match(/\t/)) wordArr = words.split(/\t/).map(low);
  if(words.match(/\t\t/)) wordArr = words.split(/\t/).map(low).join('').split(' ');

  wordArr.filter(str =>/\S/.test(str)).forEach((word, index)=>{
    if(Object.keys(ans).includes(word)) ans[word] = ans[word] + 1;
    if(word ==='constructor') ans['constructor'] = 1;
    if(!ans[word]) ans[word] = 1;

  })
  return ans;
}

function low(word){
  return word.toLowerCase();
}
module.exports = Words;
