function delElement(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
const array = [1, null, ``, undefined, false];
const itemdel = ``;
const newarray = delElement(array, itemdel);
console.log(newarray);

