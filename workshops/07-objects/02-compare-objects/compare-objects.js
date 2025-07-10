const compareObjects = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    console.log(key)
    console.log(obj1[key]);
    console.log(obj2[key]);
    if (obj1[key] !== obj2[key]) return false;
    
  }

  return true;
};


