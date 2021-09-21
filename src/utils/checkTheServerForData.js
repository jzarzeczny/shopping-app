import { getListFromCurrent } from "../firebase";
import sorter from "../utils/sorter";

const checkForUserData = async (user, setter, sort) => {
  getListFromCurrent(user).then((data) => {
    if (sort) {
      setter(sorter(data.list));
    } else {
      setter(data.list);
    }
  });
};
export { checkForUserData };
