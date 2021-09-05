import { createContext, useState } from "react";

const ListContext = createContext();

const ListContextProvider = ({ children }) => {
  const [listToDisplay, setListToDisplay] = useState([]);

  return (
    <ListContext.Provider value={{ listToDisplay, setListToDisplay }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContextProvider, ListContext };
