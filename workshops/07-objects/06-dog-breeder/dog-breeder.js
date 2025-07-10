const dogBreeder = (arg1, arg2) => {
  let dog = {
    name: 'Steve',
    age: 0
  };

  if (typeof arg1 === 'string' && typeof arg2 === 'number') {
    dog.name = arg1;
    dog.age = arg2;
  }
  else if (typeof arg1 === 'number') {
    dog.age = arg1;
  }
  else if (typeof arg1 === 'string') {
    dog.name = arg1;
  }

  return dog;
};
