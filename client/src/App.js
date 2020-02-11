import React from "react";
import CreateDo from "./components/CreateDo";
import DoList from "./components/DoList";
import api from "./apis/api";

function App() {
  return (
    <div className="App">
      <CreateDo />
      <DoList />
    </div>
  );
}

export default App;
