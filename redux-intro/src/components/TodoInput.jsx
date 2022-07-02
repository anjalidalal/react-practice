import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addTodo } from "../Redux/Action";

export const TodoInput = () => {
  const [text, setText] = useState();
  const state = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const payload = {
      title: text,
      status: false,
      id: nanoid(4),
    };
    dispatch(addTodo(payload));
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {state.map((e) => (
        <p key={e.id}>{e.title}</p>
      ))}
    </div>
  );
};
