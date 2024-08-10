from flask import Blueprint, request, jsonify
from utils.crypto_utils import aes_encrypt, aes_decrypt

crypto_bp = Blueprint('crypto_bp', __name__)

@crypto_bp.route('/encrypt', methods=['POST'])
def encrypt():
    data = request.json
    input_string = data.get('input_string')
    passkey = data.get('passkey')
    
    if not input_string or not passkey:
        return jsonify({"error": "Both input_string and passkey are required"}), 400
    
    encrypted_message, encryption_time = aes_encrypt(input_string, passkey)
    return jsonify({"encrypted": encrypted_message, "encryption_time": encryption_time})

@crypto_bp.route('/decrypt', methods=['POST'])
def decrypt():
    data = request.json
    encrypted_string = data.get('encrypted_string')
    passkey = data.get('passkey')
    
    if not encrypted_string or not passkey:
        return jsonify({"error": "Both encrypted_string and passkey are required"}), 400
    
    try:
        decrypted_message, decryption_time = aes_decrypt(encrypted_string, passkey)
        return jsonify({"decrypted": decrypted_message, "decryption_time": decryption_time})
    except (ValueError, KeyError):
        return jsonify({"error": "Invalid encrypted_string or passkey"}), 400
