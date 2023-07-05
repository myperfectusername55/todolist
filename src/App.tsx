import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="main-div">
        <h1>TodoList</h1>
        <div className="todolist">
          <div className="todolist-item">
            <span className="todolist-item-text">testovaci text</span>
          </div>
        </div>
        <div>
          <input type="text" placeholder="napis text"/>
          <button type="submit" onClick={() => {}}>
            Potvrd
          </button>
        </div>
        <button onClick={() => {}}>Delete all</button>
      </div>
    </div>
  );
}

export default App;
