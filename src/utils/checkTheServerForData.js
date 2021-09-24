import { getListFromCurrent, getList } from "../firebase";
import sorter from "../utils/sorter";

const checkForUserData = async (user, setter, sort) => {
  getListFromCurrent(user).then((data) => {
    console.log(data);
    if (sort) {
      setter(sorter(data.list));
    } else {
      setter(data.list);
    }
  });
};

const checkForAllUserData = async (user, setter, sort) => {
  getList(user).then((data) => {
    if (sort) {
      setter(sorter(data.list));
    } else {
      setter(data.list);
    }
  });
};
export { checkForUserData, checkForAllUserData };
