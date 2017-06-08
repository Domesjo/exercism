function GigaSecond(date){
  this.startDate =  date;
}

GigaSecond.prototype.date = function(){

  return new Date((Date.parse((this.startDate)) + (Math.pow(10, 9) * 1000)));
};

module.exports = GigaSecond;
