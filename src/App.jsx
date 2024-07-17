import { useState } from "react";
import Entry from "./components/Entry";
import "./App.css";
import Todos from "./components/Todos";
import Card from "./components/Card";
import { DataContextProvider } from "./context/Datacontext";
function App() {
  return (
    <DataContextProvider>
      <div className="bgimg bg-center bg-cover h-screen w-screen ">
        <h1 className="bg-white/30 rounded-lg w-3/5 text-center p-2 mx-auto max-lg:w-full">
          TODO APP
        </h1>

        <Entry></Entry>
        <hr className="w-3/4 mx-auto  outline-dotted"></hr>
        <Todos></Todos>
      </div>
    </DataContextProvider>
  );
}

export default App;
