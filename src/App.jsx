import { useState } from "react";
import "./App.css";
import RegistroForm from "./components/RegistroForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RegistroForm />
    </div>
  );
}

export default App;
