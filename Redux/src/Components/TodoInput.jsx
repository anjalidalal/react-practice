import React, { useState } from "react";

export const TodoInput = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <h3>ADD TODO</h3>
      <input
        value={title}
        placeholder="Add something"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </div>
  );
};
