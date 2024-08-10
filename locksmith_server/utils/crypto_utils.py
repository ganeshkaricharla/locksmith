from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from Crypto.Util.Padding import pad, unpad
from Crypto.Hash import SHA256
import base64
import time

def aes_encrypt(input_string, passkey):
    key = SHA256.new(passkey.encode()).digest()
    iv = get_random_bytes(16)
    cipher = AES.new(key, AES.MODE_CBC, iv)
    padded_data = pad(input_string.encode(), AES.block_size)
    
    start_time = time.time()
    encrypted_data = cipher.encrypt(padded_data)
    end_time = time.time()
    
    encryption_time = end_time - start_time
    
    encrypted_message = iv + encrypted_data
    encoded_message = base64.b64encode(encrypted_message).decode('utf-8')

    return encoded_message, encryption_time

def aes_decrypt(encrypted_string, passkey):
    key = SHA256.new(passkey.encode()).digest()
    encrypted_data = base64.b64decode(encrypted_string)
    iv = encrypted_data[:16]
    encrypted_message = encrypted_data[16:]
    cipher = AES.new(key, AES.MODE_CBC, iv)
    
    start_time = time.time()
    decrypted_padded_data = cipher.decrypt(encrypted_message)
    end_time = time.time()
    
    decryption_time = end_time - start_time
    
    original_data = unpad(decrypted_padded_data, AES.block_size)
    return original_data.decode('utf-8'), decryption_time
