import React from "react";
import "./TodoItem.css";
function TodoItem(props) {
  let ListItem;
  if (props.items.length > 0) {
    ListItem = props.items.map((item) => {
      return (
        <div key={item.id} className="ListItem">
          <span className="name">{item.name}</span>
          <span className="age">{item.age}</span>
          <button className="action" onClick={() => props.DeletItem(item.id)}>
            X
          </button>
        </div>
      );
    });
  } else {
    ListItem = <p>There Is No Items To Show</p>;
  }

  return (
    <div className="ListItem">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        <span className="action title">Action</span>
      </div>
      {ListItem}
    </div>
  );
}

export default TodoItem;
