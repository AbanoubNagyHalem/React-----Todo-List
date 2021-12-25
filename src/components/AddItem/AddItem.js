import React, { useState } from "react";
import "./AddItem..css";
// import "../TodoItem/TodoItem.css";

function AddItem(props) {
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueAge, setInputValueAge] = useState("");

  const nameHandler = (e) => {
    setInputValueName(e.target.value);
  };

  const AgeHandler = (e) => {
    setInputValueAge(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    props.addUserHandler(inputValueName, inputValueAge);
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          value={inputValueName}
          type="text"
          placeholder="Enter Name ... "
          id="name"
          onChange={nameHandler}
        />
        <input
          value={inputValueAge}
          type="number"
          placeholder="Enter Age ... "
          id="age"
          onChange={AgeHandler}
        />
        <input type="submit" value="Add" className="action" />
      </form>
    </div>
  );
}

export default AddItem;
