function transform(obj){
  const oldObject = obj;
  const values = Object.values(obj);
  const flattenValues = [].concat.apply([], values).join('').toLowerCase().split('');
  const originalKeys = Object.keys(obj);
  let object = {}
  flattenValues.forEach((key)=>{
    originalKeys.forEach((originalKey)=>{

      if(oldObject[originalKey].includes(key.toUpperCase())) object[key] = parseInt(originalKey);
    })

  });
  console.log(object);
  return object
}


module.exports = transform;
