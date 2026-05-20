import { createContext, useState, useContext } from "react";

const FormStatusContext = createContext();

export function FormStatusProvider({ children }) {
   const [typingStatus, setTypingStatus] = useState({
    users: false,
    projects: false,
    developer: false,
  });

   const setPageTyping = (page, isTyping) => {
    setTypingStatus((prev) => ({ ...prev, [page]: isTyping }));
  };

  return (
    <FormStatusContext.Provider value={{ typingStatus, setPageTyping }}>
      {children}
    </FormStatusContext.Provider>
  );
}

export const useFormStatus = () => useContext(FormStatusContext);