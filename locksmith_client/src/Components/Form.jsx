import React, { useRef, useState } from "react";
import "../Styles/Components/Form.css";

function Form({
  string_placeholder,
  secret_placeholder,
  button_txt,
  submit_function,
  output_txt,
}) {
  const stringRef = useRef(null);
  const passkeyRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const string = stringRef.current.value;
    const passkey = passkeyRef.current.value;
    await submit_function(string, passkey);
  };

  return (
    <div className="form_container">
      <form className="form_form" onSubmit={handleSubmit}>
        <input
          className="form_input form_string_input"
          name="String"
          type="text"
          ref={stringRef}
          placeholder={string_placeholder}
        />

        <input
          className="form_input form_secret_input"
          name="Secret Key"
          type={showPassword ? "text" : "password"}
          ref={passkeyRef}
          placeholder={secret_placeholder}
        />
        <button className="form_button" type="submit">
          {button_txt}
        </button>
        <div className="form_output_txt">{output_txt}</div>
      </form>
    </div>
  );
}

export default Form;
