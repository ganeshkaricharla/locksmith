import React from "react";
import "../Styles/Components/Tab.css";

function Tab({ state, handleState }) {
  return (
    <div className="tab_container">
      <button
        onClick={() => handleState("encrypt")}
        className={`tab_button_encrypt ${
          state === "encrypt" ? "tab_button_active" : ""
        }`}
      >
        Encrypt
      </button>
      <button
        onClick={() => handleState("decrypt")}
        className={`tab_button_decrypt ${
          state === "decrypt" ? "tab_button_active" : ""
        }`}
      >
        Decrypt
      </button>
    </div>
  );
}

export default Tab;
