const BigInt = require('big-integer');


export default class Grains {
  square(x){
    let grains = BigInt(0);

    function getGrains(x){
      if(x === 0){
        return grains.toString();
      } else {
        grains = BigInt(grains).times(2);
        if(BigInt(grains).equals(1) || grains.equals(0)) grains+=1;
        return getGrains((x -1));
      }
    }
    return getGrains(x);
  }

  total(){
    let ans = BigInt(0)
    for (let i = 0; i <= 64; i++){
      ans = BigInt(ans).add(this.square(i))
    }
    return ans.toString()
  }

}
