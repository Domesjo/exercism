"use strict";

function GigaSecond(date) {
  this.startDate = date;
}

GigaSecond.prototype.date = function () {
  console.log(new Date(Date.parse(this.startDate)));
  console.log(new Date(Date.parse(this.startDate) + Math.pow(10, 9) * 1000));

  return new Date(Date.parse(this.startDate) + Math.pow(10, 9) * 1000);
};

module.exports = GigaSecond;