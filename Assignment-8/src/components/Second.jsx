import { useContext } from "react";
import Third from "./Third";
import { AppContext } from "../contexts/AppContext";

const Second = () => {
  const { state, handleChange } = useContext(AppContext);

  return (
    <div>
      <h2>State is : {state}</h2>
      <button
        onClick={() => {
          handleChange("Hello");
        }}
      >
        Change Context
      </button>
      <Third />
    </div>
  );
};

export default Second;
