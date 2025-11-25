#!/bin/bash

# Eunice Adorno Portfolio - Local Development Server
# This script starts the Jekyll development server with live reload

echo "🎨 Starting Eunice Adorno Portfolio Development Server..."
echo ""

# Add gem path to environment
export PATH="$HOME/.gem/ruby/2.6.0/bin:$PATH"

# Check if Jekyll is installed
if ! command -v bundle &> /dev/null; then
    echo "❌ Bundler not found. Please install bundler first:"
    echo "   gem install --user-install bundler -v 2.4.22"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "vendor/bundle" ]; then
    echo "📦 Installing dependencies..."
    bundle install --path vendor/bundle
fi

# Start Jekyll server
echo "🚀 Starting Jekyll server on http://localhost:4000"
echo "   Press Ctrl+C to stop the server"
echo ""

bundle exec jekyll serve --port 4000 --host 0.0.0.0 --livereload
