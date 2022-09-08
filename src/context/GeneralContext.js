import { useState, createContext } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [formStep1Data, setFormStep1Data] = useState("");
  const [deleteProfileSuccess, setDeleteProfileSuccess] = useState(false);

  return (
    <GeneralContext.Provider
      value={{
        formStep1Data,
        setFormStep1Data,
        deleteProfileSuccess,
        setDeleteProfileSuccess,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
