const PhoneNumber = function PhoneNumber(number){
  const numb = number;

  this.number = function number(){

    let phoneNumb = numb.split('').filter((int)=>{
      if(parseInt(int) === 0) return int;
      return parseInt(int);
    });
    if(phoneNumb[0] === '1' && phoneNumb.length === 11) phoneNumb = phoneNumb.slice(1,11);

    if(phoneNumb.length !== 10 || numb.split('').includes('a')) return null;
    return phoneNumb.join('');
  }

};

export default PhoneNumber;
