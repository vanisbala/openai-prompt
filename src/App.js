import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Promptform from "./components/Promptform";
import PromptResponseList from "./components/PromptResponseList";
import PromptList from "./components/PromptList";
import React, { createContext, useState } from "react";
import PrContextProvider from "./components/PrContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="fs-3"> Fun with AI </h1>
      </header>
      <PrContextProvider>
        <PromptList />
        <br />
        <br />
        <Promptform />
        <br />
        <br />
        <PromptResponseList />
      </PrContextProvider>
    </div>
  );
}

export default App;
