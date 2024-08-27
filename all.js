const foo = (arr) => {
  let result = [];

  result = arr.reduce((acc, item) => acc + item, 0);

  return result;
};


console.log(foo([1,2,3,4,5,6]));

