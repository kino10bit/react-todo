import React from "react";

export const InCompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p>未完了TODO</p>
      <ul>
        {todos.map((todoName, index) => {
          return (
            <div key={todoName} className="list-row">
              <li>{todoName}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
