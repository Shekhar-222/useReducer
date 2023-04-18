import "./App.css";
import { useReducer } from "react";

let oldState = {
  value: 0,
};
let reducerFunction = (oldState, action) => {
  console.log("oldstate----->", oldState);
  console.log("action----->", action);

  switch (action.type) {
    case "ADDITION":
      return { ...oldState, value: oldState.value + action.payload };
      break;
    case "SUBSTRACRION":
      return { ...oldState, value: oldState.value - action.payload };
      break;
    case "RESET":
      return { ...oldState, value: 0 };
      break;
    default:
  }
};

function App() {
  const [newState, dispatch] = useReducer(reducerFunction, oldState);
  return (
    <div className="App">
      <h1>{newState.value}</h1>
      <button
        onClick={() => {
          dispatch({ type: "ADDITION", payload: 5 });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SUBSTRACRION", payload: 5 });
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
