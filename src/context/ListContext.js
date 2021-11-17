import { useState } from "react";
import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react/cjs/react.development";
// import { useEffect } from "react/cjs/react.development";
import { getLists } from "../firebase";
import { AuthContext } from "./FirebaseContext";

const ListsContext = createContext(null);
const ListsDispatchContext = createContext(null);

export function ListsProvider({ children }) {
  const { currentUser } = useContext(AuthContext);
  const [lists, dispatch] = useReducer(listReducer, []);

  function getListsData(data) {
    console.log("getting data");
    console.log(data);
    dispatch({
      type: "get",
      lists: [...data],
    });
  }
  console.log(lists);
  useEffect(() => {
    if (currentUser) {
      getLists(currentUser.uid).then((data) => {
        console.log(data);
        getListsData(data.lists);
      });
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
      return [...action.lists];
    default:
      console.log("error");
  }
}
