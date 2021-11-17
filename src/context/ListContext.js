import { createContext, useCallback, useContext, useReducer } from "react";
import { useEffect } from "react/cjs/react.development";
// import { useEffect } from "react/cjs/react.development";
import { getLists, pushNewList } from "../firebase";
import { AuthContext } from "./FirebaseContext";

const ListsContext = createContext(null);
const ListsDispatchContext = createContext(null);

export function ListsProvider({ children }) {
  const { currentUser } = useContext(AuthContext);
  const [lists, dispatch] = useReducer(listReducer, []);

  const onReloadNeed = useCallback(async () => {
    if (currentUser === null) return;
    const data = await getLists(currentUser.uid).then((data) => {
      return data.lists;
    });
    dispatch({
      type: "get",
      data: data,
    });
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      onReloadNeed();
    }
  }, [currentUser]);
  return (
    <ListsContext.Provider value={lists}>
      <ListsDispatchContext.Provider value={dispatch}>
        {children}
      </ListsDispatchContext.Provider>
    </ListsContext.Provider>
  );
}

export function useLists() {
  return useContext(ListsContext);
}

export function useListsDisplatch() {
  return useContext(ListsDispatchContext);
}

function listReducer(lists, action) {
  switch (action.type) {
    case "get":
      return action.data;
    case "addList":
      const newElement = {
        name: action.name,
        id: action.id,
        listCategories: [],
      };
      pushNewList(action.user, newElement);
      return [...lists];
    case "getList":
      return lists.filter((list) => list.id === action.id)[0];
    case "addToList":
      return addItemToArray(action.element, action.id, lists);

    default:
      console.log("error");
  }
}

function addItemToArray(item, id, lists) {
  if (item === null) return;
  item.id = item.product;
  console.log(...lists);
  let listToModify = lists.filter((l) => l.id === id)[0];
  let newList = lists.filter((l) => l.id !== id);
  function checkOfElementIsInList(arr, el) {
    const newArr = arr.filter((arrEl) => arrEl.name === el.category);
    if (newArr.length === 0) {
      return false;
    } else {
      return true;
    }
  }
  if (checkOfElementIsInList(listToModify.listCategories, item)) {
    listToModify.listCategories.forEach((element) => {
      if (element.name === item.category) {
        element["list"].push(item);
      }
    });
    return;
  } else {
    listToModify.listCategories.push({
      name: item.category,
      id: item.category,
      list: [item],
    });
  }
  newList.push(listToModify);
  return newList;
}
