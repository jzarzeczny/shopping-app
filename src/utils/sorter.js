export default function sorter(obj) {
  console.log(obj);
  let finalObject = {};
  finalObject.id = obj.id;
  finalObject.date = obj.date;
  finalObject.list = {};
  let arr = obj.list || [];
  arr.forEach((element) => {
    if (!(element.type in finalObject["list"])) {
      finalObject.list[element.type] = [];
    }
    if (element.type in finalObject.list) {
      finalObject.list[element.type].push(element);
    }
  });
  return finalObject;
}
