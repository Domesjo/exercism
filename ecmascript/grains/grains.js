const BigInt = require('big-integer');


export default class Grains {
  square(x, grain=0){
    let grains = BigInt(grain);

    if(x === 0){
      return grains.toString();
    } else {
      grains = BigInt(grains).times(2);
      if (BigInt(grains).equals(1) || grains.equals(0)) grains+=1;
      return this.square((x -1), grains);
    }
  }

  total(){
    let ans = BigInt(0)
    for (let i = 0; i <= 64; i++){
      ans = BigInt(ans).add(this.square(i))
    }
    return ans.toString()
  }

}
