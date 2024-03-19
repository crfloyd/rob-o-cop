#!/bin/bash

# Ensure script fails on any error
set -e

# Build the sanity project
echo "Building the Sanity project..."
cd studio && npm install && npm run build
cd ..

# Build the frontend project
echo "Building the Frontend project..."
cd frontend && npm run build
cd ..

echo "Both projects built successfully."
