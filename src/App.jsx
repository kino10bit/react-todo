import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { InCompleteTodo } from "./components/incompleteTodo";

export const App = () => {
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setCompleteTods] = useState([]);
  const [inputText, setInputText] = useState();

  //TODO入力変更イベント
  const InputTextChange = (event) => setInputText(event.target.value);

  const addTodo = () => {
    if (inputText !== "") {
      const inCompleteArr = [...incompleteTodos, inputText];
      setInputText("");
      setincompleteTodos(inCompleteArr);
    }
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    //選択したものを削除
    const newimcompleteTodos = [...incompleteTodos];
    newimcompleteTodos.splice(index, 1);
    setincompleteTodos(newimcompleteTodos);

    //選択したものを完了に追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTods(newCompleteTodos);
  };

  const backOnClick = (index) => {
    //選択したものを削除
    const newCompleteTodos = [...completeTodos];

    //未完了に追加
    const newInCompleteTodos = [...incompleteTodos, newCompleteTodos[index]];
    newCompleteTodos.splice(index, 1);

    setCompleteTods(newCompleteTodos);
    setincompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodo
        inputText={inputText}
        onChange={InputTextChange}
        onClick={addTodo}
      />
      <InCompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <div className="complete-area">
        <p>完了TODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => backOnClick(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
