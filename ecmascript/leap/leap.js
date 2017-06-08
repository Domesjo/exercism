const isLeapYear = (year)=>{
  console.log(2000/400%2 === 0);
  if((year%4 === 0) && (year%100 !== 0 ) || (year%400 === 0)) return true;
  return false;
};

export default isLeapYear;
