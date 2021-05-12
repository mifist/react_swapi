import {createContext, useContext, useState} from 'react';
//import _find from "lodash/find";
//import { prop, sortWith, ascend, descend } from "ramda";

const AppStateContext = createContext();
const AppDispatchContext = createContext();

export const AppContextProvider = ({children}) => {
  const [data, setData] = useState([]);
  return (
    <AppStateContext.Provider value={data}>
      <AppDispatchContext.Provider value={setData}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useStateAppData = () => {
  const data = useContext(AppStateContext);
  if (!data) {
    throw Error('useStateAppData must be call withing AppContextProvider');
  }
  return data;
};

export const useDispatchAppData = () => {
  const setData = useContext(AppDispatchContext);
  if (!setData) {
    throw Error('useDispatchAppData must be call withing AppContextProvider');
  }
  return setData;
};
