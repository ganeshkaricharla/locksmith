// cryptoApi.js
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000";

export const decrypt = async (encryptedString, passkey) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/decrypt`,
      {
        encrypted_string: encryptedString,
        passkey: passkey,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error decrypting message:", error);
    throw error;
  }
};

export const encrypt = async (inputString, passkey) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/encrypt`,
      {
        input_string: inputString,
        passkey: passkey,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error encrypting message:", error);
    throw error;
  }
};
