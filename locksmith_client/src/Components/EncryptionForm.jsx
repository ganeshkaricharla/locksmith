import React, { useState } from "react";
import Form from "./Form";
import { encrypt } from "../Apis/apis";

function EncryptionForm() {
  const [outputTxt, setOutputTxt] = useState("");
  const handleEncrypt = async (inputString, passkey) => {
    try {
      const result = await encrypt(inputString, passkey);
      setOutputTxt(result.encrypted);
    } catch (error) {
      alert("Decryption failed:", error);
    }
  };
  return (
    <div className="encrytion_form">
      <Form
        string_placeholder={"Enter String to Encrypt"}
        secret_placeholder={"Enter your passkey to encrypt"}
        button_txt={"Encrypt"}
        submit_function={handleEncrypt}
        output_txt={outputTxt}
      />
    </div>
  );
}

export default EncryptionForm;
