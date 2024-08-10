import { useState } from "react";

import "../Styles/App/App.css";

import Tab from "../Components/Tab";
import Header from "../Components/Header";
import DecryptionForm from "../Components/DecryptionForm";
import EncryptionForm from "../Components/EncryptionForm";

function App() {
  const [formState, SetFormState] = useState("encrypt");
  const handleToggle = (state) => {
    if (state === "encrypt" || state === "decrypt") {
      SetFormState(state);
    } else {
      alert("Invalid Form state.");
    }
  };
  return (
    <div className="App">
      <Header />
      <Tab state={formState} handleState={handleToggle} />
      {formState === "encrypt" && <EncryptionForm />}
      {formState === "decrypt" && <DecryptionForm />}
    </div>
  );
}

export default App;
