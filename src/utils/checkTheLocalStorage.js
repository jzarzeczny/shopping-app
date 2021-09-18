const checkTheLocalStorage = (list) => {
  if (Object.keys(list).length > 0) {
    return list;
  } else {
    return JSON.parse(localStorage.getItem("list"));
  }
};

export default checkTheLocalStorage;
