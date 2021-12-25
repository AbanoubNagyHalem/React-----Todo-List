import React, { useState } from "react";
import AddItem from "./components/AddItem/AddItem";
import TodoItem from "./components/TodoItem/TodoItem";
import "./App.css";

function App() {
  const items = [
    { id: 1, name: "Hamza", age: 25 },
    { id: 2, name: "Gamal", age: 35 },
    { id: 3, name: "Alfy", age: 45 },
  ];

  const [list, setList] = useState(items);

  const addUserHandler = (uName, uAge) => {
    setList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  let DeletItem = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };

  return (
    <div className="container">
      <h1 className="text-C"> TodoList App</h1>
      <TodoItem items={list} DeletItem={DeletItem} />
      <AddItem addUserHandler={addUserHandler} />
    </div>
  );
}

export default App;
