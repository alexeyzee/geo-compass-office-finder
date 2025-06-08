
#!/bin/bash

echo "Building single HTML file for Office Locator..."

# Clean previous build
rm -rf inline-dist

# Build with Vite
npx vite build --config vite.inline.config.ts

# Check if build was successful
if [ ! -f "inline-dist/office-locator.iife.js" ]; then
    echo "Error: Build failed - JavaScript file not found"
    exit 1
fi

# Create the combined HTML file
cat > inline-dist/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Office Locator</title>
    <style>
EOF

# Append CSS if it exists
if [ -f "inline-dist/assets/office-locator.css" ]; then
    cat inline-dist/assets/office-locator.css >> inline-dist/index.html
elif [ -f "inline-dist/style.css" ]; then
    cat inline-dist/style.css >> inline-dist/index.html
fi

cat >> inline-dist/index.html << 'EOF'
    </style>
</head>
<body>
    <div id="office-locator-root"></div>
    <script>
EOF

# Append JavaScript
cat inline-dist/office-locator.iife.js >> inline-dist/index.html

cat >> inline-dist/index.html << 'EOF'
    </script>
</body>
</html>
EOF

echo "✅ Single HTML file created: inline-dist/index.html"
echo ""
echo "To use this file:"
echo "1. Open inline-dist/index.html in a web browser"
echo "2. Or upload it to any web server"
echo "3. The file is completely self-contained (except for Google Maps API)"
EOF

4. Make the build script executable and update .gitignore:

<lov-write file_path=".gitignore">
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Widget build outputs
widget-dist
inline-dist
