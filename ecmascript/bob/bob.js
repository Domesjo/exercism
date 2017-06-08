//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
    const response = {
      '?': 'Sure.',
      '!': 'Whoa, chill out!',
      b: 'Fine. Be that way!',
      catch: 'Whatever.'
    };

    if(!message || message.trim().length === 0) return response.b;
    let respo = response.catch;
    const action = message.charAt(message.length-1).toString();
    const res = ['?','!','b'];
    if(res.includes(action)) {
      if(res[res.indexOf(action)] === '!' && message[2] !== message[2].toUpperCase()) return response.catch;
      else if(res[res.indexOf(action)] === '?' && message.length <3) return response['?'];
      else if(message === message.toUpperCase() && !parseInt(message)) return respo = response['!'];
      else {
        respo = response[action];
      }
    }
    if(message === message.toUpperCase()&& (!res.includes(action)) && String(message) && !parseInt(message)) return response['!'];
    // if(parseInt(message)) return response.catch;
    return respo;
  }
}

export default Bob;
