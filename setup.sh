#!/bin/bash

# Navigate to the Flask app directory and start it in the background
cd ./locksmith_server
nohup python3 app.py &

cd ..
# Navigate to the React app directory and start it
cd ./locksmith_client
nohup npm start &

# Give the React app some time to start (adjust if necessary)
sleep 5

# Open the React app in the default web browser
open http://localhost:3000

# OR for Linux
# xdg-open http://localhost:3000
