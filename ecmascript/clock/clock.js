export default function at(hours, minutes=0){
  if (0 > hours){
    while( hours < 0){
      hours += 24;
    }
  }
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
  return hour + min;

}
