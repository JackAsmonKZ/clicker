import { useState } from "react";
import { ClickContext } from "./context/ClickContext";
import { Counter } from "./components/Counter/Counter";

function App() {
  const [click, setClick] = useState(0);

  return (
    <ClickContext.Provider value={{ click, setClick }}>
      <Counter />
    </ClickContext.Provider>
  );
}

export default App;
