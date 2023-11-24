// Example 1
const getIndexOfArray = <T>(array: T[], arrayItem: T) => {
  return array.indexOf(arrayItem);
};

const arr = [55, 8, 99];
getIndexOfArray(arr, 8);



// Example 2
const genericsArray = <T1, T2>(str: T1, num: T2): (T1 | T2)[] => {
  const arr: (T1 | T2)[] = [];
  arr.push(str);
  arr.push(num);
  return arr;
};

const result = genericsArray<string, number>("hello", 55);



