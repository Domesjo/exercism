class Triangle{
  constructor(sideOne, sideTwo, sideThree){
    this.sides = [sideOne, sideTwo, sideThree];
  }
  kind(){
    if(!this.sides.every(element=> element > 0) || this.isLegit(this.sides)) throw new Error("All sides must be positive")
    console.log(this.sides);
    if(this.isEqual(this.sides)) return "equilateral";
    if(this.isIso(this.sides).includes(true)) return "isosceles";
    return "scalene"
  }
  isEqual(arr){
    const val = arr[0];
  return arr.every((element)=>{
      return element === val;
    });
  }

  isLegit(arr){
    const testArr = arr;
    const biggest = Math.max.apply(Math, testArr);
    const biggestIndex = testArr.indexOf(biggest);
    testArr.splice(biggestIndex, 1);
    const isTrue = (testArr[0] + testArr[1]) <= biggest;
    arr.push(biggest);
    return isTrue
  }

  isIso(arr){
  const mappedArray = arr.map((element, index, array)=>{
      if(element === arr[index+1] && index !== (array.length-1) || element === arr[index+2]) return true
    });
    return mappedArray
  }
}

export default Triangle;
