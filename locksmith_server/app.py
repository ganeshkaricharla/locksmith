from flask import Flask
from flask_cors import CORS
from routes.crypto_routes import crypto_bp

app = Flask(__name__)

# Enable CORS for the entire application
CORS(app)

# Register the blueprint
app.register_blueprint(crypto_bp)

if __name__ == '__main__':
    app.run(debug=True)
