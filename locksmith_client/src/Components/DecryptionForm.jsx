import React, { useState } from "react";
import Form from "./Form";
import { decrypt } from "../Apis/apis";

function DecryptionForm() {
  const [outputTxt, setOutputTxt] = useState("");
  const handleDecrypt = async (encryptedString, passkey) => {
    try {
      const result = await decrypt(encryptedString, passkey);
      setOutputTxt(result.decrypted);
    } catch (error) {
      alert("Decryption failed:", error);
    }
  };
  return (
    <div className="decryption_form">
      <Form
        string_placeholder={"Enter Encrypted Text"}
        secret_placeholder={"Enter your passkey to decrypt"}
        button_txt={"Decrypt"}
        submit_function={handleDecrypt}
        output_txt={outputTxt}
      />
    </div>
  );
}

export default DecryptionForm;
