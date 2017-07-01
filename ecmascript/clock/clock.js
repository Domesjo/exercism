function at(hours, minutes=0){
  if (0 > minutes && hours ===0){
    while(minutes < 0){
      minutes += 60;
    }
  } else {
    while(minutes < 0){
      hours-= 1;
      minutes += 60;
    }
  }
  if (0 > hours){
    while( hours < 0){
      hours += 24;
    }
  }

  if(minutes >= 60){
    while(minutes - 60 >= 0){
      hours += 1
      minutes = minutes - 60
    }
  }

  if(hours >= 24) {
    while(hours - 24 >= 0){
      hours = hours - 24;
    }
  }
  let hour = hours.toString().length === 1 ? `0${hours}:`: `${hours}:`;
  let min = minutes.toString().length === 1 ? `0${minutes}`: `${minutes}`
  if(at.prototype.time) at.prototype.old = at.prototype.time;
  at.prototype.time = hour + min
  return hour + min;
}
String.prototype.plus = (mins)=>{
  let newTime = at.prototype.time.split(':');
  return at(parseInt(newTime[0]), (parseInt(newTime[1]) + mins) )
}
String.prototype.minus = (mins)=>{
  let newTime = at.prototype.time.split(':');
  if(parseInt(newTime[0]) === 0 && (newTime[1] - mins) <= 0) newTime[0] = 24
  return at(parseInt(newTime[0]), (parseInt(newTime[1]) - mins) )
}
String.prototype.equals = (cb)=>{
  console.log(at.prototype.time === cb);
  return at.prototype.old === cb
}

export default at;
