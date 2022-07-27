import { createContext, useReducer } from "react";
import reducer from "./reducers";

export const AppContext = createContext();
const initialAppState = {
  showMiniCart: false,
  addedProduct: null,
};

function AppProvider({ children }) {
  const [appState, appDispatch] = useReducer(reducer, initialAppState);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
