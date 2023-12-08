import logo from "./logo.svg";
import "./App.css";
import { DefaultContext } from "./context/default";
import { useContext } from "react";
import GameArea from "./container/GameArea";

function App() {
  const {} = useContext(DefaultContext);

  return (
    <div className="App">
      <GameArea />
    </div>
  );
}

export default App;
