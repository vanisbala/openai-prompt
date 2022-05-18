import React, { createContext, useState } from "react";
export const PrContext = createContext(null);

const PrContextProvider = (props) => {
  const [promptResponses, setPromptResponses] = useState([{}]);
  const [promptClue, setPromptClue] = useState("Fun Facts About An Animal");
  return (
    <PrContext.Provider
      value={{ promptResponses, setPromptResponses, promptClue, setPromptClue }}
    >
      {props.children}
    </PrContext.Provider>
  );
};

export default PrContextProvider;
