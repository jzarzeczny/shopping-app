export default function sorter(arr) {
  let finalObject = {};
  arr.forEach((element) => {
    if (!(element.type in finalObject)) {
      finalObject[element.type] = [];
    }
    if (element.type in finalObject) {
      finalObject[element.type].push(element);
    }
  });
  return finalObject;
}
